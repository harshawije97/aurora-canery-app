import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserQueries } from 'src/db/queries/user.queries';

@Module({
  imports: [],
  providers: [UsersService, UserQueries],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
