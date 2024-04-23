import { ValueOf } from '@/shared/lib/types/valueOf';

export const UserRole = {
  ADMIN: 'ADMIN',
  USER: 'USER',
} as const;

export type UserRole = ValueOf<typeof UserRole>;

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
