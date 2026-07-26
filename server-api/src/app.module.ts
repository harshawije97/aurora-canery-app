import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ChannelsService } from './channels/channels.service';
import { ChannelsModule } from './channels/channels.module';
import { ChannelsController } from './channels/channels.controller';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ChannelsModule,
  ],
  controllers: [AppController, ChannelsController],
  providers: [AppService, ChannelsService],
})
export class AppModule {}
