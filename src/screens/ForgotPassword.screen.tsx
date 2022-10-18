import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Center, Heading, View } from 'native-base';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@config/index';
import { ForgotPasswordForm, ForgotPasswordInputs } from '@organisms';
import { Loading } from '@atoms';

const ForgotPasswordScreen = () => {
  const [loading, setLoading] = useState(false);

  // hooks
  const navigation = useNavigation();

  // handlers
  const handleOnSubmit = ({ email }: ForgotPasswordInputs) => {
    setLoading(true);
    sendPasswordResetEmail(auth, email.trim())
      .then(() => {
        navigation.navigate('login');
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <Center flex={1} p="8">
      <View flex={1} width="100%" justifyContent="center" alignItems="center">
        <Heading size="2xl" mb="10">
          Reset password
        </Heading>

        <ForgotPasswordForm handleOnSubmit={handleOnSubmit} />
      </View>

      <Loading loading={loading} />
    </Center>
  );
};

export default ForgotPasswordScreen;
