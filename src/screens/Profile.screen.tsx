import React from 'react';
import { Center, Heading, View } from 'native-base';

const ProfileScreen = () => (
  <Center flex={1} p="8">
    <View flex={1} width="100%" justifyContent="center" alignItems="center">
      <Heading size="2xl" mb="10" color="primary.600">
        Profile
      </Heading>
    </View>
  </Center>
);

export default ProfileScreen;
