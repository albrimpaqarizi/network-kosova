import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Center, Heading, HStack, Spinner, View } from 'native-base';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import { app } from '@config/index';
import { ForgotPasswordForm, ForgotPasswordInputs } from '@organisms';

const ForgotPasswordScreen = () => {
  const [loading, setLoading] = useState(false);

  // hooks
  const navigation = useNavigation();

  // handlers
  const handleOnSubmit = ({ email }: ForgotPasswordInputs) => {
    const auth = getAuth(app);

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
        style={loading && styles.hidden}
      >
        <Heading size="2xl" mb="10" color="primary.600">
          Reset password
        </Heading>

        <ForgotPasswordForm handleOnSubmit={handleOnSubmit} />
      </View>

      <HStack space={8} justifyContent="center" style={!loading && styles.hidden}>
        <Spinner size="lg" />
      </HStack>
    </Center>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  hidden: { display: 'none' },
});
