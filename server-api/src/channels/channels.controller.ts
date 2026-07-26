import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('channels')
export class ChannelsController {
  @UseGuards(JwtGuard)
  @Post('create')
  create(@Body() reqBody: any) {
    return {
      message: 'Successful',
      data: !reqBody,
    };
  }
}
