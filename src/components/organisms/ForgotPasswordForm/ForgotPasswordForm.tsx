import * as React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button, FormControl } from 'native-base';

import { TextField } from '@atoms';
import { ForgotPasswordProps, ForgotPasswordInputs } from './ForgotPasswordForm.types';
import { ForgotPasswordFormSchema } from '@validations/ForgotPassword.validator';

export const ForgotPasswordForm = ({ handleOnSubmit }: ForgotPasswordProps) => {
  const { control, handleSubmit } = useForm<ForgotPasswordInputs>({
    // resolver: joiResolver(ForgotPasswordFormSchema),
  });

  return (
    <>
      <FormControl>
        <FormControl.Label>Email</FormControl.Label>
        <TextField<ForgotPasswordInputs>
          rounded="lg"
          placeholder="example@gmail.com"
          control={{ control, name: 'email' }}
        />
      </FormControl>

      <Button width="full" mt="6" rounded="lg" onPress={handleSubmit(handleOnSubmit)}>
        Send link
      </Button>
    </>
  );
};
