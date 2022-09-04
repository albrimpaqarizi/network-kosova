import React, { useState } from 'react';
import { Center, Text, Button, Heading, HStack, Spinner, View } from 'native-base';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthStore } from '@store';

import { auth } from '@firebase/config';
import { LoginForm, LoginInputs } from '@organisms';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { Alert } from 'react-native';

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);

  // hooks
  const navigation = useNavigation();
  const { addAuthUser } = useAuthStore();

  // handlers
  useFocusEffect(
    React.useCallback(() => {
      const user = auth.currentUser;
      if (user) navigation.navigate('home');
      return () => {
        Alert.alert('Root Screen was unfocused');
      };
    }, [])
  );

  const handleOnSubmit = ({ email, password }: LoginInputs) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email.trim(), password.trim())
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
        style={loading && { display: 'none' }}
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

      <HStack space={8} justifyContent="center" style={!loading && { display: 'none' }}>
        <Spinner size="lg" />
      </HStack>
    </Center>
  );
};

export default LoginScreen;
