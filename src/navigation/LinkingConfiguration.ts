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
      home: 'home',
      tag: 'tag',
      load: 'load',
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
