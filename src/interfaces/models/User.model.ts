import { UserRoleEnum } from '@enums/UserRole.enum';

export interface AuthUserModel {
  fullName: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  email: string;
  photoURL: string;
  uid: string;
  role: UserRoleEnum;
}

export interface UserModel {
  fullName: string;
  avatar: string;
  uid: string;
}
