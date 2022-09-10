import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import {
  ForgotPasswordScreen,
  LoadScreen,
  LoginScreen,
  ModalScreen,
  NotFoundScreen,
  RegisterScreen,
  WelcomeScreen,
} from '@screens/index';

import { RootStackParamList } from './Navigation.types';
import { StyleSheet } from 'react-native';
import HomeStackNavigator from './Home.navigator';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="load">
      <RootStack.Screen name="load" component={LoadScreen} />
      <RootStack.Screen name="home" component={HomeStackNavigator} />
      <RootStack.Group screenOptions={{ headerStyle: styles.headerStyle }}>
        <RootStack.Screen name="welcome" component={WelcomeScreen} />
        <RootStack.Screen name="login" component={LoginScreen} />
        <RootStack.Screen name="register" component={RegisterScreen} />
        <RootStack.Screen name="forgot" component={ForgotPasswordScreen} />
      </RootStack.Group>

      <RootStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen name="Modal" component={ModalScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0, // remove shadow on Android
  },
});
