import { timestamp, uuid, varchar } from 'drizzle-orm/pg-core/columns';
import { pgTable } from 'drizzle-orm/pg-core/table';
import { roles } from './enums/db.enums';

export { roles } from './enums/db.enums';

// Users schema
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  role: roles('roles').default('user').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at'),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

// Auth schema
export const auth = pgTable('auth', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id')
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: 'cascade' }),
  password: varchar('password', { length: 255 }).notNull(),
  refreshToken: varchar('refresh_token', { length: 500 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

// Export user types
export type Auth = typeof auth.$inferSelect;
export type NewAuth = typeof auth.$inferInsert;
