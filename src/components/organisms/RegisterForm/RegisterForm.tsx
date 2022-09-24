import * as React from 'react';
import { RadioField, TextField } from '@atoms';
import { Button, HStack, Radio, VStack } from 'native-base';
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
      <VStack space={4} mb="10" alignItems="flex-start">
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

        <RadioField<RegisterFormInputs>
          label="Gender"
          px="1"
          variant="underlined"
          defaultValue="Male"
          name="gender"
          control={{ control, name: 'gender' }}
        >
          <HStack alignItems="flex-start" space={4}>
            <Radio value="Male" my={1}>
              Male
            </Radio>
            <Radio value="Female" my={1}>
              Female
            </Radio>
            <Radio value="Other" my={1}>
              Other
            </Radio>
          </HStack>
        </RadioField>

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
