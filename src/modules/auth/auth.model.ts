export class AuthModel {
  accessToken = '';

  constructor(partial?: Partial<AuthModel>) {
    Object.assign(this, partial);
  }
}
