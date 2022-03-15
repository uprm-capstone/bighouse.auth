import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  private users: any[] = [];

  async findOne(email: string): Promise<any> {
    return this.users.find((user) => user.email === email);
  }

  async insert(user: any) {
    const newUser = new User(user?.email, user?.password, user?.roles);
    this.users.push(newUser);
  }
}
