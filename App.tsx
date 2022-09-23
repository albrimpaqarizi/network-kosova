/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import Navigation from '@navigation/index';
import useCachedResources from '@hooks/useCachedResources';
import { Loading } from '@atoms';
import { LogBox } from 'react-native';

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
          <Loading />
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }

  LogBox.ignoreLogs([
    'Warning: AsyncStorage has been extracted from react-native core and will be removed in a future release.',
  ]);

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Navigation />
        <StatusBar style="dark" />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};
export default App;
