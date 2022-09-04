import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, HStack, Spinner } from 'native-base';

const LoadScreen = () => {
  // hooks
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('welcome');
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <HStack space={8} justifyContent="center">
        <Spinner size="lg" />
      </HStack>
    </Box>
  );
};

export default LoadScreen;
