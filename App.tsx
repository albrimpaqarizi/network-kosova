import React from 'react';
import { auth } from '@firebase/config';
import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged } from 'firebase/auth';
import { NativeBaseProvider } from 'native-base';

import Navigation from '@navigation/index';
import useCachedResources from '@hooks/useCachedResources';
import useColorScheme from '@hooks/useColorScheme';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const { uid } = user;
      console.log('🚀 ~ file: App.tsx ~ line 25 ~ onAuthStateChanged ~ uid', uid);
      // ...
    } else {
      // User is signed out
      console.log('🚀 ~ file: App.tsx ~ line 32 ~ onAuthStateChanged ~  // User is signed out');
    }
  });

  return (
    <NativeBaseProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar animated />
    </NativeBaseProvider>
  );
}
