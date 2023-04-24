import { IEntity } from '@/lib/core/IEntity';
import { AuthModel } from './auth.model';

export class AuthEntity implements IEntity<AuthModel> {
  accessToken = '';

  constructor(partial?: Partial<AuthModel>) {
    Object.assign(this, partial);
  }

  toModel(): AuthModel {
    return new AuthModel(this);
  }
}
