import React from 'react';
import { Loading } from '@atoms';
import { useAuth } from '@hooks/useAuth';

const LoadScreen = () => {
  // hooks
  useAuth();

  return <Loading />;
};

export default LoadScreen;
