import { HStack, Spinner } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

export const Loading = ({ loading }: { loading: boolean }) => (
  <HStack justifyContent="center" style={loading ? styles.load : styles.hidden}>
    <Spinner size="lg" />
  </HStack>
);

const styles = StyleSheet.create({
  hidden: { display: 'none' },
  load: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(242, 242, 242, 1)',
  },
});
