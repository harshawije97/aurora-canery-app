import { Injectable, UnauthorizedException } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { db } from 'src/db/connection.db';
import { auth } from 'src/db/schema.db';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  /**
   *
   */
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  //   verify user
  async verifyUser(email: string, password: string): Promise<any> {
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

  // eslint-disable-next-line @typescript-eslint/require-await
  async login(user: { id: string; email: string; role: string }) {
    // Create payload
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    // Generate jwt token
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
