import { HStack, Spinner, View } from 'native-base';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { LoadDataProps } from './Loader.types';

export const Loader = ({ loading, condition, children, fallback, time = 300 }: LoadDataProps) => {
  // local states
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // hooks
  useLayoutEffect(() => {
    if (loading && !condition) setIsLoading(true);
  }, [condition, loading]);

  useEffect(() => {
    const timer = setTimeout(() => !loading && setIsLoading(false), time);
    return () => clearTimeout(timer);
  }, [condition, loading, time]);

  if (isLoading) {
    return (
      <HStack space={8} justifyContent="center">
        <Spinner size="lg" />
      </HStack>
    );
  }

  return (
    <View flex={1} width="100%" justifyContent="center" alignItems="center">
      {condition ? fallback : children}
    </View>
  );
};
