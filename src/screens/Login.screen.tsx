import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GestureResponderEvent } from 'react-native';
import { Alert, Button, Center, Heading, HStack, Text, useToast, View } from 'native-base';
import { auth } from '@config/index';
import { useAuthStore } from '@store';
import { LoginForm, LoginInputs } from '@organisms';
import { Loading } from '@atoms';

const LoginScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);

  // hooks
  const toast = useToast();
  const { addAuthUser } = useAuthStore();

  // const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
  //   clientId: '231556270244-58mkid6g2kbui0h0t5bkbsa55lrpht4p.apps.googleusercontent.com',
  // });

  // handlers
  const handleGoogleAuth = async (_event: GestureResponderEvent) => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ propmt: 'Select account' });
    provider.addScope('email');
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('🚀 ~ file: Login.screen.tsx ~ .then ~ result', result);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log('🚀 ~ file: Login.screen.tsx ~ .then ~ credential', credential);
      })
      .catch((error) => {
        console.log('🚀 ~ file: Login.screen.tsx ~ handleGoogleAuth ~ error', error);
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log('🚀 ~ file: Login.screen.tsx ~ handleGoogleAuth ~ credential', credential);
      });
  };

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
        console.log('🚀 ~ file: Login.screen.tsx ~ line 58 ~ handleOnSubmit ~ error', error);

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
    <Center flex={1}>
      <View flex={1} p="8" width="100%" justifyContent="center" alignItems="center">
        <Heading size="2xl" mb="8">
          Sign in
        </Heading>

        <LoginForm handleOnSubmit={handleOnSubmit} />

        <Text>Or</Text>
        <Button width="full" my="3" variant="outline" rounded="full" onPress={handleGoogleAuth}>
          Sign in with Google
        </Button>
      </View>

      <Loading loading={loading} />
    </Center>
  );
};

export default LoginScreen;
