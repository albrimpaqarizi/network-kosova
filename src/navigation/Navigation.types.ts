/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  home: NavigatorScreenParams<RootTabParamList> | undefined;
  welcome: undefined;
  login: undefined;
  register: undefined;
  forgot: undefined;
  load: undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootTabParamList = {
  home: undefined;
  tag: undefined;
  chat: undefined;
  post: undefined;
};

// eslint-disable-next-line prettier/prettier
export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
