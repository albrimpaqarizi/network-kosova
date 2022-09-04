import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList = RootStackParamList;
//   }
// }

export type RootStackParamList = {
  // home: NavigatorScreenParams<RootTabParamList> | undefined;
  home: undefined;
  tag: undefined;
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
