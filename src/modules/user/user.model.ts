import { Role } from '@/enums/role';

export class UserModel {
  id: string | undefined = undefined;
  firstName = '';
  lastName = '';
  role: Role = Role.User;

  constructor(partial?: Partial<UserModel>) {
    Object.assign(this, partial);
  }

  /**
   * Get the full name of the user
   * @returns
   */
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`.split(' ').join(' ');
  }
}
