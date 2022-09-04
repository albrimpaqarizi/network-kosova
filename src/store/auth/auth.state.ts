import { AuthUserModel, Nullable } from '@interfaces';
import create from 'zustand';

// types
import { AuthStateTypes } from './auth.types';

export const useAuthStore = create<AuthStateTypes>((set) => ({
  user: null,
  isAuthenticated: false,
  isVerification: false,
  addAuthUser: (
    user: Nullable<AuthUserModel>,
    isAuthenticated: boolean,
    isVerification: boolean
  ) => {
    set(() => ({ user, isAuthenticated, isVerification }));
  },
  removeAuth: () => set(() => ({ user: null, isAuthenticated: false, isVerification: false })),
  addAuthenticated: (isAuthenticated: boolean) => set(() => ({ isAuthenticated })),
  addVerification: (isVerification: boolean) => set(() => ({ isVerification })),
}));
