import { UserModel } from '@/modules/user/user.model';
import { atom } from 'recoil';

export const authAtom = atom<{
  user: UserModel | null;
}>({
  key: 'authAtom',
  default: {
    user: null,
  },
});
