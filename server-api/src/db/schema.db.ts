import { timestamp, uuid, varchar } from 'drizzle-orm/pg-core/columns';
import { pgTable } from 'drizzle-orm/pg-core/table';

// Users schema
export const users = pgTable('auth', {
  id: uuid('auth_id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  refreshToken: varchar('refresh_token', { length: 500 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at'),
});

// Export user types
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
