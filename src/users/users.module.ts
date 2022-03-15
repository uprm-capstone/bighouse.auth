import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
