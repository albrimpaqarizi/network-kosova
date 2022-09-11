import * as React from 'react';
import { TextField } from '@atoms';
import { Button } from 'native-base';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ForgotPasswordProps, ForgotPasswordInputs } from './ForgotPasswordForm.types';
import { ForgotPasswordFormSchema } from '@validations/ForgotPassword.validator';

export const ForgotPasswordForm = ({ handleOnSubmit }: ForgotPasswordProps) => {
  const { control, handleSubmit } = useForm<ForgotPasswordInputs>({
    resolver: zodResolver(ForgotPasswordFormSchema),
  });

  return (
    <>
      <TextField<ForgotPasswordInputs>
        rounded="lg"
        placeholder="example@gmail.com"
        control={{ control, name: 'email' }}
      />

      <Button width="full" mt="6" rounded="lg" onPress={handleSubmit(handleOnSubmit)}>
        Send link
      </Button>
    </>
  );
};
