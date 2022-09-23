import * as React from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Alert, Button, Center, Heading, HStack, Text, useToast } from 'native-base';
import { RegisterForm, RegisterFormInputs } from '@organisms';
import { auth } from '@config/firebaseApp';
import { useAuthStore } from '@store';
import { Loading } from '@atoms';

const RegisterScreen = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  // hooks
  const toast = useToast();
  const { addAuthUser } = useAuthStore();

  const handleOnSubmit = ({ email, password, fullName }: RegisterFormInputs) => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: fullName.trim(),
            // photoURL: 'https://example.com/jane-q-user/profile.jpg',
          });
        }
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
        toast.show({
          render: () => (
            <HStack space={2} justifyContent="center" alignItems="center">
              <Alert.Icon color="red.500" />
              <Text color="red.500">{error}</Text>
            </HStack>
          ),
        });
        setLoading(false);
      });
  };

  return (
    <Center flex={1}>
      <Center flex={1} p="8">
        <Heading size="xl" mb="8">
          Create new account
        </Heading>

        <RegisterForm handleOnSubmit={handleOnSubmit} />

        <Text my="3">Or</Text>

        <Button width="full" variant="outline" rounded="full">
          Sign up with Google
        </Button>
      </Center>

      <Loading loading={loading} />
    </Center>
  );
};

export default RegisterScreen;
