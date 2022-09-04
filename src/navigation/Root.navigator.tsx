import * as React from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { Pressable } from 'native-base';
import { Alert, StyleSheet } from 'react-native';
import {
  ForgotPasswordScreen,
  LoadScreen,
  LoginScreen,
  ModalScreen,
  NotFoundScreen,
  RegisterScreen,
  TabOneScreen,
  TabTwoScreen,
  WelcomeScreen,
} from '@screens/index';

import { RootStackParamList, RootTabScreenProps } from './Navigation.types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  useFocusEffect(
    React.useCallback(() => {
      Alert.alert('Root Screen was focused');
      // Do something when the screen is focused
      return () => {
        Alert.alert('Root Screen was unfocused');

        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="load">
      <RootStack.Screen name="load" component={LoadScreen} />
      <RootStack.Group screenOptions={{ headerStyle: styles.headerStyle }}>
        <RootStack.Screen
          name="home"
          component={TabOneScreen}
          options={({ navigation }: RootTabScreenProps<'home'>) => ({
            tabBarIcon: () => <AntDesign name="home" size={30} color="white" />,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
              >
                <FontAwesome name="info-circle" size={25} />
              </Pressable>
            ),
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          })}
        />
        <RootStack.Screen
          name="tag"
          component={TabTwoScreen}
          options={() => ({
            tabBarIcon: () => <AntDesign name="home" size={30} color="white" />,
            headerStyle: { backgroundColor: '#ca005e' },
          })}
        />
      </RootStack.Group>

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
    backgroundColor: 'initial',
    borderBottomWidth: 0,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0, // remove shadow on Android
  },
});
