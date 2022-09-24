export interface AuthUserModel {
  fullName: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  email: string;
  photoURL: string;
  phoneNumber: string;
  uid: string;
}

export interface UserModel {
  fullName: string;
  avatar: string;
  uid: string;
}
