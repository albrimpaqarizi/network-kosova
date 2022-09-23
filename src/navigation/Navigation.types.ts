/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type AuthParamList = {
  welcome: undefined;
  login: undefined;
  register: undefined;
  forgot: undefined;
  load: undefined;
  notFound: undefined;
};

export type HomeParamList = {
  home: undefined;
  profile: undefined;
  chat: undefined;
  post: undefined;
};

export type RootParamList = {
  root: HomeParamList;
  updateProfile: undefined;
  profileSettings: undefined;
};

export type RootStackParamList = AuthParamList &
  HomeParamList & {
    Modal: undefined;
    updateProfile: undefined;
    profileSettings: undefined;
  };

// eslint-disable-next-line prettier/prettier
export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabScreenProps<Screen extends keyof HomeParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
