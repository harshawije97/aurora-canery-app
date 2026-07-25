import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ParseEmailPipe } from 'src/common/pipes/parse-email-pipe.pipes';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() createUser: CreateUserDTO) {
    return this.usersService.createUserByAsync(createUser);
  }

  @Get('role/:role')
  getByRole(@Param('role') role: any) {
    return this.usersService.getUserByRoleAsync(role);
  }

  @Get('email')
  getByEmail(@Query('email', ParseEmailPipe) email: string) {
    return this.usersService.getUserByEmailAsync(email);
  }

  @Get(':id')
  single(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.getUserByIdAsync(id);
  }
}
