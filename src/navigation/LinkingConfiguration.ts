import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from './Navigation.types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      login: 'login',
      register: 'register',
      welcome: 'welcome',
      forgot: 'forgot',
      load: 'load',
      Modal: 'modal',
      home: 'home',
      chat: 'chat',
      post: 'post',
      notFound: '*',
    },
  },
};

export default linking;
