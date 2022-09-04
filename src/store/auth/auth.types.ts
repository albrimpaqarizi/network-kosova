import { Nullable, AuthUserModel } from '@interfaces';

export interface AuthStateTypes {
  user: Nullable<AuthUserModel>;
  isAuthenticated: boolean;
  isVerification: boolean;
  addAuthUser: (
    value: Nullable<AuthUserModel>,
    isAuthenticated: boolean,
    isVerification: boolean
  ) => void;
  addVerification: (isVerification: boolean) => void;
  addAuthenticated: (isAuthenticated: boolean) => void;
  removeAuth: () => void;
}
