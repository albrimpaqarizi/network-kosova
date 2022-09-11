import React from 'react';
import { Center, Heading, View } from 'native-base';

const ChatScreen = () => (
  <Center flex={1} p="8">
    <View flex={1} width="100%" justifyContent="center" alignItems="center">
      <Heading size="2xl" mb="10" color="primary.600">
        Chat
      </Heading>
    </View>
  </Center>
);

export default ChatScreen;
