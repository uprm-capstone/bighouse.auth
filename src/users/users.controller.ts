import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @MessagePattern({ cmd: 'create-user' })
  async createUser(data: any) {
    console.log('data', data);

    return this.usersService.insert(data);
  }
}
