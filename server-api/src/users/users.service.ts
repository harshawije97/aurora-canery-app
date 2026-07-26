/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { db } from 'src/db/connection.db';
import { users } from 'src/db/schema.db';
import { eq, SQLWrapper } from 'drizzle-orm';
import * as bcrypt from 'bcrypt';
import { UserQueries } from 'src/db/queries/user.queries';

@Injectable()
export class UsersService {
  /**
   *
   */
  constructor(private readonly queries: UserQueries) {}

  // Create new user
  async createUserByAsync(createUser: CreateUserDTO) {
    const response = await this.queries.getUserByEmailQuery(createUser.email);
    if (response) {
      throw new BadRequestException('User already exists');
    }
    // Password hash
    const hashedPassword = await bcrypt.hash(createUser.password, 10);

    try {
      const newUser = await this.queries.createUserQuery(
        createUser,
        hashedPassword,
      );

      return newUser;
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
