import * as React from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Alert, Button, Center, Heading, HStack, Text, useToast, View } from 'native-base';
import { RegisterForm, RegisterFormInputs } from '@organisms';
import { auth, db } from '@config/firebaseApp';
import { useAuthStore } from '@store';
import { Loading } from '@atoms';
import { addDoc, collection } from 'firebase/firestore';

const RegisterScreen = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  // hooks
  const toast = useToast();
  const { addAuthUser } = useAuthStore();

  const handleOnSubmit = ({ email, fullName, gender, password }: RegisterFormInputs) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        if (auth.currentUser) {
          updateProfile(auth.currentUser, { displayName: fullName.trim() });
          addDoc(collection(db, 'users'), {
            gender,
            uid: user.uid,
            email: email.trim(),
            fullName: fullName.trim(),
          });
        }
        addAuthUser(
          {
            uid: user.uid,
            isAnonymous: false,
            email: email.trim(),
            fullName: fullName.trim(),
            emailVerified: user.emailVerified,
            phoneNumber: user.phoneNumber || '',
            photoURL: user.photoURL || '',
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
      <View flex={1} p="8" width="100%" justifyContent="center" alignItems="center">
        <Heading size="xl" mb="8">
          Create new account
        </Heading>

        <RegisterForm handleOnSubmit={handleOnSubmit} />

        <Text my="3">Or</Text>

        <Button width="full" variant="outline" rounded="full">
          Sign up with Google
        </Button>
      </View>

      <Loading loading={loading} />
    </Center>
  );
};

export default RegisterScreen;
