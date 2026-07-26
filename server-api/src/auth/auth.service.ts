/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { eq, isNotNull } from 'drizzle-orm';
import { db } from 'src/db/connection.db';
import { auth } from 'src/db/schema.db';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { and } from 'drizzle-orm';
import { hashInput, compareHashValues } from 'src/common/hash-input.common';

@Injectable()
export class AuthService {
  /**
   *
   */
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
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

  // Create access & refresh tokens separately
  /**
   *
   */
  // Access token
  private createAccessToken(user: { id: string; email: string; role: string }) {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const accessTokenOptions = {
      secret: this.config.get<string>('JWT_ACCESS_SECRET'),
      expiresIn: this.config.get<string>('JWT_ACCESS_EXPIRY'),
    } as any;

    return this.jwtService.sign(payload, accessTokenOptions);
  }

  // Refresh token
  private createRefreshToken(user: { id: string }) {
    const refreshTokenOptions = {
      secret: this.config.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: this.config.get<string>('JWT_REFRESH_EXPIRY'),
    } as any;

    return this.jwtService.sign({ sub: user.id }, refreshTokenOptions);
  }

  // Authenticate user
  /**
   *
   */

  async login(user: { id: string; email: string; role: string }) {
    const accessToken = this.createAccessToken(user);
    const refreshToken = this.createRefreshToken(user);

    // Hash the refresh token
    const hashedRefreshToken = hashInput(refreshToken);
    // Update into the db
    await db
      .update(auth)
      .set({
        refreshToken: hashedRefreshToken,
      })
      .where(eq(auth.userId, user.id));

    // Generate jwt token
    return { accessToken, refreshToken };
  }

  // Refresh token issuer
  async refreshTokenRotation(userId: string, incomingToken: string) {
    // Check if the user exists
    const user = await this.userService.getUserByIdAsync(userId);
    if (!user) {
      throw new UnauthorizedException('Access denied: invalid user');
    }

    // Check user has been authenticated
    const [authUser] = await db
      .select()
      .from(auth)
      .where(and(eq(auth.userId, userId), isNotNull(auth.refreshToken)));

    if (!authUser || !authUser.refreshToken) {
      throw new UnauthorizedException('Access denied: user not authenticated');
    }

    // incoming token hashing:
    // don't use bcrypt for JWT hashing only use it for password hashing
    const incomingHash = hashInput(incomingToken);

    // compare the tokens
    const matchTokens = compareHashValues(incomingHash, authUser.refreshToken);

    console.log(matchTokens);

    if (!matchTokens) {
      throw new UnauthorizedException('Access denied');
    }

    // Issue a new token by invalidating the old
    const newAccessToken = this.createAccessToken(user);
    const newRefreshToken = this.createRefreshToken(user);

    // Hash the refresh token
    const hashedRefreshToken = hashInput(newRefreshToken);
    // Update into the db
    await db
      .update(auth)
      .set({
        refreshToken: hashedRefreshToken,
      })
      .where(eq(auth.userId, user.id));

    return { newAccessToken, newRefreshToken };
  }
}
