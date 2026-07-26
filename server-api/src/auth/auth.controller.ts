/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/auth-local.gard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  signIn(@Request() req: any) {
    return req.user;
  }
}
