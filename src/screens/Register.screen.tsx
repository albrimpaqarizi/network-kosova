import * as React from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import {
  Alert,
  Button,
  Center,
  Heading,
  HStack,
  ScrollView,
  Text,
  useToast,
  View,
} from 'native-base';
import { auth, db } from '@config/firebaseApp';
import { useAuthStore } from '@store';
import { Loading } from '@atoms';
import { RegisterForm, RegisterFormInputs } from '@organisms';
import { UserRoleEnum } from '@enums/UserRole.enum';

const RegisterScreen = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  // hooks
  const toast = useToast();
  const { addAuthUser } = useAuthStore();

  const handleOnSubmit = ({ email, fullName, gender, password }: RegisterFormInputs) => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const data = { email, fullName, uid: user.uid, role: UserRoleEnum.GUEST };
        if (auth.currentUser) {
          updateProfile(auth.currentUser, { displayName: fullName });
          addDoc(collection(db, 'users'), { ...data, gender }).then(() => {
            addAuthUser(
              {
                ...data,
                isAnonymous: false,
                photoURL: user.photoURL || '',
                emailVerified: user.emailVerified,
              },
              true,
              false
            );
          });
        }
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
    <ScrollView mt={20}>
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
    </ScrollView>
  );
};

export default RegisterScreen;
