import { Role } from '@/enums/role';
import { IForm } from '@/lib/core/IForm';

export class AppLoginDto implements IForm {
  id: string | undefined = undefined;
  firstName = '';
  lastName = '';
  role: Role = Role.User;

  constructor(partial?: Partial<AppLoginDto>) {
    Object.assign(this, partial);
  }

  toForm() {
    return this;
  }
}
