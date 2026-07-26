import { Injectable, UnauthorizedException } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { db } from 'src/db/connection.db';
import { auth } from 'src/db/schema.db';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  /**
   *
   */
  constructor(private readonly userService: UsersService) {}

  //   verify user
  async verifyUser(email: string, password: string) {
    // get user by email
    const [user] = await this.userService.getUserByEmailAsync(email);
    if (!user) {
      throw new UnauthorizedException("Verification Failed:User doesn't exist");
    }
    // get auth record
    const [authUser] = await db
      .select()
      .from(auth)
      .where(eq(auth.userId, user.id));

    if (!authUser) {
      throw new UnauthorizedException('Invalid credentials');
    }
    // check passwords
    const passMatch = await bcrypt.compare(password, authUser.password);
    // return user
    if (!passMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }
}
