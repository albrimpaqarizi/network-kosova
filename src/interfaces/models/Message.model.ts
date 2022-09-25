export interface MessageModel {
  _id: string;
  createdAt: Date;
  text: string;
  docId?: string;
  uid?: string[];
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

export interface ChatModel {
  id: string;
  createdAt: Date;
  text: string;
  uid?: string[];
  user: {
    uid: string;
    fullName: string;
    avatar: string;
  };
}
