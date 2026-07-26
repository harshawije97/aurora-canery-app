import { CreateUserDTO } from 'src/users/dto/create-user.dto';
import { db } from '../connection.db';
import { auth, users } from '../schema.db';
import { eq } from 'drizzle-orm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserQueries {
  constructor() {}

  async createUserQuery(user: CreateUserDTO, password: string) {
    return db.transaction(async (operation) => {
      const [newUser] = await operation
        .insert(users)
        .values({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
        })
        .returning();

      await operation.insert(auth).values({
        userId: newUser.id,
        password: password,
      });

      return newUser;
    });
  }

  async getUserByEmailQuery(email: string): Promise<any> {
    const [user] = await db.select().from(users).where(eq(users.email, email));

    return user ?? null;
  }
}
