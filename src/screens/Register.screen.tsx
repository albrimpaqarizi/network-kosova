import * as React from 'react';
import { Button, Center, Heading, Text } from 'native-base';
import { RegisterForm } from '@organisms';

const RegisterScreen = () => (
  <Center flex={1} p="8">
    <Heading size="xl" mb="8">
      Create new account
    </Heading>

    <RegisterForm />

    <Text my="3">Or</Text>

    <Button width="full" variant="outline" rounded="full">
      Sign up with Google
    </Button>
  </Center>
);

export default RegisterScreen;
