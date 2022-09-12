import React from 'react';
import { Center, Heading, Text, View } from 'native-base';
import { useAuthStore } from '@store';

const ProfileScreen = () => {
  const { user } = useAuthStore();

  return (
    <Center flex={1} p="8">
      <View flex={1} width="100%" justifyContent="center" alignItems="center">
        <Heading size="2xl" mb="10">
          Profile
        </Heading>
        <Text>{user?.uid}</Text>
        <Text>{user?.email}</Text>
      </View>
    </Center>
  );
};

export default ProfileScreen;
