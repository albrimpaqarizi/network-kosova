import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import {
  ForgotPasswordScreen,
  LoginScreen,
  NotFoundScreen,
  RegisterScreen,
  WelcomeScreen,
} from '@screens/index';

import { AuthParamList } from './Navigation.types';

const RootStack = createNativeStackNavigator<AuthParamList>();

const RootNavigator = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="welcome">
    <RootStack.Group screenOptions={{ headerStyle: styles.headerStyle }}>
      <RootStack.Screen name="welcome" component={WelcomeScreen} />
      <RootStack.Screen name="login" component={LoginScreen} />
      <RootStack.Screen name="register" component={RegisterScreen} />
      <RootStack.Screen name="forgot" component={ForgotPasswordScreen} />
    </RootStack.Group>

    <RootStack.Screen name="notFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    {/* <RootStack.Group screenOptions={{ presentation: 'modal' }}>
      <RootStack.Screen name="Modal" component={ModalScreen} />
    </RootStack.Group> */}
  </RootStack.Navigator>
);

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
