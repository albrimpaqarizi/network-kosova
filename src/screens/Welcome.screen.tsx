import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, Button, Center, Heading, View } from 'native-base';

const WelcomeScreen = () => {
  // hooks
  const navigation = useNavigation();

  // handlers
  const handleRedirect = (path: 'login' | 'register') => () => navigation.navigate(path);

  return (
    <Center flex={1} p="4">
      <View mb="10">
        <AntDesign name="apple1" size={100} />
      </View>
      <Heading size="lg">Powered by React Native</Heading>
      <Text textAlign="center" mt="1" mb="8">
        It is a long established fact that a reader will be distracted by the readable content of
      </Text>

      <Button width="5/6" my="3" rounded="full" onPress={handleRedirect('login')}>
        Log In
      </Button>
      <Button
        width="5/6"
        my="3"
        variant="outline"
        rounded="full"
        onPress={handleRedirect('register')}
      >
        Sign Up
      </Button>
    </Center>
  );
};

export default WelcomeScreen;
