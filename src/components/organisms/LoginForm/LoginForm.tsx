import * as React from 'react';
import { TextField } from '@atoms';
import { useNavigation } from '@react-navigation/native';
import { Button, Link, VStack } from 'native-base';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { LoginFormProps, LoginInputs } from './Login.types';
import { LoginFormSchema } from '@validations/Login.validator';

export const LoginForm = ({ handleOnSubmit }: LoginFormProps) => {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm<LoginInputs>({
    mode: 'onSubmit',
    resolver: zodResolver(LoginFormSchema),
  });

  const handleForgotPassword = () => navigation.navigate('forgot');

  return (
    <>
      <VStack space={4} alignItems="center">
        <TextField<LoginInputs>
          label="Email"
          placeholder="example@gmail.com"
          control={{ control, name: 'email' }}
        />

        <TextField<LoginInputs>
          label="Password"
          placeholder="********"
          secureTextEntry
          control={{ control, name: 'password' }}
        />
      </VStack>
      <Link isUnderlined mb="3" alignSelf="flex-end" onPress={handleForgotPassword} href="/">
        Forgot Password?
      </Link>

      <Button width="full" my="3" rounded="lg" onPress={handleSubmit(handleOnSubmit)}>
        Log In
      </Button>
    </>
  );
};
