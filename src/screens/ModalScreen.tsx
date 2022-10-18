import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Box, View, Text } from 'native-base';
import { Platform, StyleSheet } from 'react-native';

const ModalScreen = () => (
  <Box flex={1} alignItems="center" justifyContent="center">
    <Text>Modal</Text>
    <View style={styles.separator} />

    {/* Use a light status bar on iOS to account for the black space above the modal */}
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
  </Box>
);

export default ModalScreen;
const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
