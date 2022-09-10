import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Navigation from '@navigation/index';
import useCachedResources from '@hooks/useCachedResources';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { Loading } from '@atoms';

const App = () => {
  const isLoadingComplete = useCachedResources();

  console.log('isLoadingComplete', isLoadingComplete);

  if (!isLoadingComplete) {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
          <Loading />
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Navigation />
        <StatusBar />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};
export default App;
