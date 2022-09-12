import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { StyleSheet } from 'react-native';
import { LoginForm, LoginInputs } from '@organisms';
import { auth } from '@config/index';
import { useAuthStore } from '@store';
import { Alert, Button, Center, Heading, HStack, Spinner, Text, useToast, View } from 'native-base';

const LoginScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);

  // hooks
  const toast = useToast();
  const { addAuthUser } = useAuthStore();

  const handleOnSubmit = ({ email, password }: LoginInputs) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        addAuthUser(
          {
            email: user.email || '',
            emailVerified: user.emailVerified,
            fullName: user.displayName || '',
            isAnonymous: false,
            phoneNumber: user.phoneNumber || '',
            photoURL: user.photoURL || '',
            uid: user.uid || '',
          },
          true,
          false
        );
      })
      .catch((error) => {
        console.log('error', error);
        toast.show({
          render: () => (
            <HStack space={2} justifyContent="center" alignItems="center">
              <Alert.Icon color="red.500" />
              <Text color="red.500">{error}</Text>
            </HStack>
          ),
        });
      });
    setLoading(false);
  };

  return (
    <Center flex={1} p="8">
      <View
        flex={1}
        width="100%"
        justifyContent="center"
        alignItems="center"
        style={loading && styles.hidden}
      >
        <Heading size="2xl" mb="8">
          Sign in
        </Heading>

        <LoginForm handleOnSubmit={handleOnSubmit} />

        <Text>Or</Text>
        <Button width="full" my="3" variant="outline" rounded="full">
          Sign in with Google
        </Button>
      </View>

      <HStack space={8} justifyContent="center" style={!loading && styles.hidden}>
        <Spinner size="lg" />
      </HStack>
    </Center>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  hidden: { display: 'none' },
});
