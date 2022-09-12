import * as React from 'react';
import { TextField } from '@atoms';
import { Button, Center, HStack, VStack } from 'native-base';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormInputs } from './RegisterForm.types';
import { RegisterFormSchema } from '@validations/Register.validator';

export const RegisterForm = () => {
  const { control, handleSubmit } = useForm<RegisterFormInputs>({
    resolver: zodResolver(RegisterFormSchema),
  });

  // handlers
  const handleOnSubmit = (data: RegisterFormInputs) => console.log('data', data);

  return (
    <>
      <VStack space={4} mb="10" alignItems="center">
        <HStack space={2} justifyContent="space-around" w="100%">
          <Center w="48%">
            <TextField<RegisterFormInputs>
              label="First name"
              placeholder="John"
              control={{ control, name: 'firstName' }}
            />
          </Center>
          <Center w="48%">
            <TextField<RegisterFormInputs>
              label="Last name"
              placeholder="Doe"
              control={{ control, name: 'lastName' }}
            />
          </Center>
        </HStack>

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
      </VStack>

      <Button width="full" rounded="lg" onPress={handleSubmit(handleOnSubmit)}>
        Sign Up
      </Button>
    </>
  );
};
