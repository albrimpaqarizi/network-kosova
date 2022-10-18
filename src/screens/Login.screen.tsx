import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Alert, Button, Center, Heading, HStack, Text, useToast, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { query, collection, where, onSnapshot } from 'firebase/firestore';
import { useAuthStore } from '@store';
import { LoginForm, LoginInputs } from '@organisms';
import { Loading } from '@atoms';
import { auth, db } from '@config/index';

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);

  // hooks
  const toast = useToast();
  const { addAuthUser } = useAuthStore();
  const navigation = useNavigation();

  const handleToSignUp = () => navigation.navigate('register');

  const handleOnSubmit = ({ email, password }: LoginInputs) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
        onSnapshot(q, (snapshot) => {
          addAuthUser(
            {
              isAnonymous: false,
              uid: user.uid || '',
              email: user.email || '',
              emailVerified: user.emailVerified,
              role: snapshot.docs[0].data().role,
              photoURL: snapshot.docs[0].data().avatar || '',
              fullName: snapshot.docs[0].data().fullName || '',
            },
            true,
            false
          );
        });

        setLoading(false);
      })
      .catch((error) => {
        console.log('🚀 ~ file: Login.screen.tsx ~ line 46 ~ handleOnSubmit ~ error', error);

        toast.show({
          render: () => (
            <HStack space={2} justifyContent="center" alignItems="center">
              <Alert.Icon color="red.500" />
              <Text color="red.500">Your email or password is incorrect, please try again</Text>
            </HStack>
          ),
        });
        setLoading(false);
      });
  };

  return (
    <Center flex={1}>
      <View flex={1} p="8" width="100%" justifyContent="center" alignItems="center">
        <Heading size="2xl" mb="8">
          Sign in
        </Heading>

        <LoginForm handleOnSubmit={handleOnSubmit} />

        <Text>Or</Text>
        <Button width="full" my="3" variant="outline" rounded="full" onPress={handleToSignUp}>
          Sign Up
        </Button>
      </View>

      <Loading loading={loading} />
    </Center>
  );
};

export default LoginScreen;
