/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/auth-local.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  /**
   *
   */
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(@Request() req: any) {
    const response = await this.authService.login(req.user);
    return response;
  }
}
