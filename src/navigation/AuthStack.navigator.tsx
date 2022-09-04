import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { WelcomeScreen, LoginScreen, RegisterScreen, ForgotPasswordScreen } from '@screens/index';

import { Alert, StyleSheet } from 'react-native';
import { AuthTabParamList } from './Navigation.types';
import { useFocusEffect } from '@react-navigation/native';

const AuthStack = createNativeStackNavigator<AuthTabParamList>();

const AuthStackNavigator = () => {
  useFocusEffect(
    React.useCallback(() => {
      Alert.alert('Auth Screen was focused');
      // Do something when the screen is focused
      return () => {
        Alert.alert('Auth Screen was unfocused');

        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}
      initialRouteName="welcome"
    >
      <AuthStack.Screen options={{ headerShown: false }} name="welcome" component={WelcomeScreen} />
      <AuthStack.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="login"
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="register"
        component={RegisterScreen}
      />
      <AuthStack.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="forgot"
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'initial',
    borderBottomWidth: 0,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0, // remove shadow on Android
  },
});

export default AuthStackNavigator;
