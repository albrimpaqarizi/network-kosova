import React, { useState } from 'react';
import { Center, Heading, HStack, Spinner, View } from 'native-base';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

import { auth } from '@firebase/config';
import { ForgotPasswordForm, ForgotPasswordInputs } from '@organisms';

const ForgotPasswordScreen = () => {
  const [loading, setLoading] = useState(false);

  // hooks
  const navigation = useNavigation();

  // handlers
  const handleOnSubmit = ({ email }: ForgotPasswordInputs) => {
    setLoading(true);
    sendPasswordResetEmail(auth, email.trim())
      .then((response) => {
        // Password reset email sent!
        console.log('response', response);
        navigation.navigate('login');
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
          Reset password
        </Heading>

        <ForgotPasswordForm handleOnSubmit={handleOnSubmit} />
      </View>

      <HStack space={8} justifyContent="center" style={!loading && { display: 'none' }}>
        <Spinner size="lg" />
      </HStack>
    </Center>
  );
};

export default ForgotPasswordScreen;
