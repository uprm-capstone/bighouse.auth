import { v4 as uuidv4 } from 'uuid';

export class User {
  public id: string;
  public email: string;
  public password: string;
  public roles: string[];
  public createdAt: Date;
  public updatedAt: Date;
  public enabled: boolean;
  constructor(email: string, password: string, roles: string[]) {
    this.id = uuidv4();
    this.email = email;
    this.password = password;
    this.roles = roles;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.enabled = true;
  }
}
