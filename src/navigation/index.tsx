import React, { useState, useEffect, useCallback } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import LinkingConfiguration from './LinkingConfiguration';
import RootNavigator from './Root.navigator';
import { useAuthStore } from '@store';
import { auth, db } from '@config/firebaseApp';
import { onAuthStateChanged } from 'firebase/auth';
import HomeStackNavigator from './Home.navigator';
import { Loading } from '@atoms';

const Navigation = () => {
  // local state
  const [loading, setLoading] = useState<boolean>(true);

  // hooks
  const { addAuthUser, removeAuth, user, isAuthenticated } = useAuthStore();

  const getUser = useCallback(() => {
    onAuthStateChanged(auth, async (response) => {
      if (response) {
        const queryUser = query(collection(db, 'users'), where('uid', '==', response?.uid));
        onSnapshot(queryUser, (snapshot) => {
          const { fullName, avatar, role, email } = snapshot.docs[0].data();
          addAuthUser(
            {
              role,
              email,
              fullName,
              isAnonymous: false,
              uid: response.uid || '',
              emailVerified: response.emailVerified,
              photoURL: avatar || user?.photoURL,
            },
            true,
            false
          );
          setLoading(false);
        });
      } else {
        removeAuth();
        setLoading(false);
      }
    });
  }, [addAuthUser, removeAuth, user]);

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
