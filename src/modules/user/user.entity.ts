import { Role } from '@/enums/role';
import { IEntity } from '@/lib/core/IEntity';
import { UserModel } from './user.model';

export class UserEntity implements IEntity<UserModel> {
  id = '';
  firstName = '';
  lastName = '';
  role: Role = Role.User;

  constructor(partial?: Partial<UserModel>) {
    Object.assign(this, partial);
  }

  toModel(): UserModel {
    return new UserModel(this);
  }
}
