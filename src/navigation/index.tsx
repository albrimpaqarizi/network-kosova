import React, { useState, useEffect, useCallback } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import LinkingConfiguration from './LinkingConfiguration';
import RootNavigator from './Root.navigator';
import { useAuthStore } from '@store';
import { auth } from '@config/firebaseApp';
import { onAuthStateChanged } from 'firebase/auth';
import HomeStackNavigator from './Home.navigator';
import { Loading } from '@atoms';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

const Navigation = () => {
  // local state
  const [loading, setLoading] = useState<boolean>(true);

  // hooks
  const { addAuthUser, removeAuth, isAuthenticated } = useAuthStore();

  const getUser = useCallback(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        addAuthUser(
          {
            email: user.email || '',
            emailVerified: user.emailVerified,
            fullName: user.displayName || '',
            isAnonymous: false,
            phoneNumber: user.phoneNumber || '',
            photoURL: user.photoURL || '',
            uid: user.uid || '',
          },
          true,
          false
        );
      } else {
        removeAuth();
      }
      setLoading(false);
    });
  }, [addAuthUser, removeAuth]);

  useEffect(() => {
    const subscriber = getUser();
    return subscriber;
  }, [getUser]);

  if (loading) {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
          <Loading loading />
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
      {isAuthenticated ? <HomeStackNavigator /> : <RootNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
