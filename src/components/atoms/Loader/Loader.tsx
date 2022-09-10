import React, { useEffect, useState } from 'react';
import { Box, HStack, Spinner, View } from 'native-base';
import { LoadDataProps } from './Loader.types';

export const Loader = ({ loading, children, fallback, time = 300 }: LoadDataProps) => {
  // local states
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // hooks
  useEffect(() => {
    const timer = setTimeout(() => !loading && setIsLoading(false), time);
    return () => clearTimeout(timer);
  }, [loading, time]);

  if (isLoading) {
    return (
      fallback || (
        <Box flex={1} alignItems="center" justifyContent="center">
          <HStack space={8} justifyContent="center">
            <Spinner size="lg" />
          </HStack>
        </Box>
      )
    );
  }

  return (
    <View flex={1} width="100%" justifyContent="center" alignItems="center">
      {children}
    </View>
  );
};
