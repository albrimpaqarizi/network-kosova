// import 'source-map-support/register'

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';

import Navigation from '@navigation/index';
import useCachedResources from '@hooks/useCachedResources';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <Navigation />
      <StatusBar animated />
    </NativeBaseProvider>
  );
}
