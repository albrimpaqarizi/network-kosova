import { UserModel } from '../models/User.model';

export type ChatParamList = {
  chat: {
    user: UserModel;
    chatId?: string;
  };
};
