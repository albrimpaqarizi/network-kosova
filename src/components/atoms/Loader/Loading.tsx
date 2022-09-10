import { Box, HStack, Spinner } from 'native-base';
import React from 'react';

export const Loading = () => (
  <Box flex={1} alignItems="center" justifyContent="center">
    <HStack space={8} justifyContent="center">
      <Spinner size="lg" />
    </HStack>
  </Box>
);
