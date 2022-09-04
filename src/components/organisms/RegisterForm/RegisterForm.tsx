import * as React from 'react';
import { Button, VStack } from 'native-base';
import { TextField } from '@atoms';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { RegisterFormInputs } from './RegisterForm.types';
import { RegisterFormSchema } from '@validations/Register.validator';

export const RegisterForm = () => {
  const { control, handleSubmit } = useForm<RegisterFormInputs>({
    // resolver: joiResolver(RegisterFormSchema),
  });

  // handlers
  const handleOnSubmit = (data: RegisterFormInputs) => console.log('data', data);

  return (
    <>
      <VStack space={4} mb="10" alignItems="center">
        <TextField<RegisterFormInputs>
          rounded="full"
          placeholder="John"
          control={{ control, name: 'firstName' }}
        />
        <TextField<RegisterFormInputs>
          rounded="full"
          placeholder="Doe"
          control={{ control, name: 'lastName' }}
        />
        <TextField<RegisterFormInputs>
          rounded="full"
          placeholder="example@gmail.com"
          control={{ control, name: 'email' }}
        />

        <TextField<RegisterFormInputs>
          rounded="full"
          placeholder="********"
          secureTextEntry={true}
          control={{ control, name: 'password' }}
        />
      </VStack>

      <Button width="full" rounded="full" onPress={handleSubmit(handleOnSubmit)}>
        Sign Up
      </Button>
    </>
  );
};
