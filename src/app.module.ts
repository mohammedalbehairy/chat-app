import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [UsersModule, AuthModule, ChatModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
