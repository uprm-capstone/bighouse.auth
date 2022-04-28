import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/models/user.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  // KEYS
  private apiKeys: string[] = [
    'ca03na188ame03u1d78620de67282882a84',
    'd2e621a6646a4211768cd68e26f21228a81',
  ];

  validateApiKey(apiKey: string) {
    return this.apiKeys.find((apiK) => apiKey === apiK);
  }
  async validateUser(user: User, password: string) {
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  validateUserByToken(token: string) {
    console.log({token})
    return this.jwtService.verify(token);
  }

  getAccessToken(user: any) {
    return {
      tocken: this.jwtService.sign(user),
      user,
    };
  }
}
