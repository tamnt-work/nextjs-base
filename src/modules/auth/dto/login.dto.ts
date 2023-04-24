import { IForm } from '@/lib/core/IForm';

export class LoginDto implements IForm {
  email = '';
  password = '';

  constructor(partial?: Partial<LoginDto>) {
    Object.assign(this, partial);
  }

  toForm() {
    return this;
  }
}
