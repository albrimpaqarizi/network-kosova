import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { StyleSheet } from 'react-native';
import { LoginForm, LoginInputs } from '@organisms';
import { auth } from '@config/index';
import { useAuthStore } from '@store';
import { Button, Center, Heading, HStack, Spinner, Text, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);

  // hooks
  const navigation = useNavigation();
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
          },
          true,
          false
        );
        navigation.navigate('home');
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log('error', error);
      });
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
        <Heading size="2xl" mb="10" color="primary.600">
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
