import * as React from 'react';
import { TextField } from '@atoms';
import { Button, VStack } from 'native-base';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormInputs, RegisterFormProps } from './RegisterForm.types';
import { RegisterFormSchema } from '@validations/Register.validator';

export const RegisterForm = ({ handleOnSubmit }: RegisterFormProps) => {
  const { control, handleSubmit } = useForm<RegisterFormInputs>({
    mode: 'onSubmit',
    resolver: zodResolver(RegisterFormSchema),
  });

  return (
    <>
      <VStack space={4} mb="10" alignItems="center">
        <TextField<RegisterFormInputs>
          label="Full name"
          placeholder="John Doe"
          control={{ control, name: 'fullName' }}
        />

        <TextField<RegisterFormInputs>
          label="Email"
          placeholder="example@gmail.com"
          control={{ control, name: 'email' }}
        />
        <TextField<RegisterFormInputs>
          label="Password"
          placeholder="********"
          secureTextEntry
          control={{ control, name: 'password' }}
        />

        <TextField<RegisterFormInputs>
          label="Confirm Password"
          placeholder="********"
          secureTextEntry
          control={{ control, name: 'confirmPassword' }}
        />
      </VStack>

      <Button width="full" rounded="lg" onPress={handleSubmit(handleOnSubmit)}>
        Sign Up
      </Button>
    </>
  );
};
