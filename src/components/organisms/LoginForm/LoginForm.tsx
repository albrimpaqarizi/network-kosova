import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Button, FormControl, Link, VStack } from 'native-base';

import { TextField } from '@atoms';
import { LoginFormProps, LoginInputs } from './Login.types';
import { useNavigation } from '@react-navigation/native';

export const LoginForm = ({ handleOnSubmit }: LoginFormProps) => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    // resolver: joiResolver(LoginFormSchema),
  });

  const handleForgotPassword = () => navigation.navigate('forgot');

  return (
    <>
      <VStack space={4} alignItems="center">
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <TextField<LoginInputs>
            rounded="lg"
            placeholder="example@gmail.com"
            control={{ control, name: 'email' }}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <TextField<LoginInputs>
            rounded="lg"
            placeholder="********"
            secureTextEntry={true}
            control={{ control, name: 'password' }}
          />
        </FormControl>
      </VStack>
      <Link
        isUnderlined
        mb="3"
        color="primary.600"
        alignSelf="flex-end"
        onPress={handleForgotPassword}
      >
        Forgot Password?
      </Link>

      <Button width="full" my="3" rounded="lg" onPress={handleSubmit(handleOnSubmit)}>
        Log In
      </Button>
    </>
  );
};
