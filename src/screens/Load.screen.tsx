import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Loading } from '@atoms';

const LoadScreen = () => {
  // hooks
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('welcome');
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return <Loading />;
};

export default LoadScreen;
