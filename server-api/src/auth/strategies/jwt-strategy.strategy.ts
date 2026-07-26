/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_ACCESS_SECRET'),
    } as any);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async validate(payload: {
    sub: string;
    email: string;
    role: string;
  }): Promise<any> {
    // const user = await this.usersService.getUserByIdAsync(payload.sub);
    // if (!user) {
    //   throw new UnauthorizedException('User no longer exists');
    // }

    // whatever we return here becomes req.user in protected routes
    return { id: payload.sub, email: payload.email, role: payload.role };
  }
}
