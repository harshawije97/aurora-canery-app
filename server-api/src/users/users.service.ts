import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { db } from 'src/db/connection.db';
import { auth, users } from 'src/db/schema.db';
import { eq, SQLWrapper } from 'drizzle-orm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  // Create new user
  async createUserByAsync(createUser: CreateUserDTO) {
    const response = await db
      .select()
      .from(users)
      .where(eq(users.email, createUser.email));
    if (response.length > 0) {
      throw new BadRequestException('User already exists');
    }
    // Password hash
    const hashedPassword = await bcrypt.hash(createUser.password, 10);

    try {
      return db.transaction(async (operation) => {
        const [newUser] = await operation
          .insert(users)
          .values({
            firstName: createUser.firstName,
            lastName: createUser.lastName,
            email: createUser.email,
            role: createUser.role,
          })
          .returning();

        await operation.insert(auth).values({
          userId: newUser.id,
          password: hashedPassword,
        });

        return newUser;
      });
    } catch (error) {
      throw new InternalServerErrorException(error, 'Error creating user');
    }
  }

  // Get all users
  async getAllUsersByAsync() {}
  // Get users by Id
  async getUserByIdAsync(id: string) {
    const response = await db.select().from(users).where(eq(users.id, id));
    return response[0] ?? null;
  }
  // Get by email
  async getUserByEmailAsync(email: any) {
    return await db
      .select()
      .from(users)
      .where(eq(users.email, email as SQLWrapper<unknown>))
      .limit(1);
  }
  // Get by role
  async getUserByRoleAsync(role: any) {
    return await db
      .select()
      .from(users)
      .where(eq(users.role, role as SQLWrapper<unknown>));
  }
}
