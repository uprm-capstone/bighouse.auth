import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { User } from 'src/users/models/user.model';
import { UsersService } from 'src/users/users.service';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService, // private readonly usersService: UsersService,
  ) { }

  @MessagePattern({ cmd: 'authorize' })
  async authorize(payload: any) {
    console.log('payload', payload);

    const result = new User('ppe@pepe.com', 'seviche', ['boss']); // await this.usersService.findOne(payload?.email);
    const user = this.authService.validateUser(result, payload?.password);
    if (!user) {
      return null;
    }
    return this.authService.getAccessToken(user);
  }

  @MessagePattern({ cmd: 'validate' })
  validate(token: string) {
    console.log('token', token);

    try {
      return this.authService.validateUserByToken(token);
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
