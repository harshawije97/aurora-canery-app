/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('channels')
export class ChannelsController {
  @UseGuards(JwtGuard)
  @Post('create')
  create(@Request() req: any) {
    console.log(req);
    return {
      message: 'Successful',
      data: req.body,
    };
  }
}
