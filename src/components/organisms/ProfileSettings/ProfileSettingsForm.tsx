import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Button, VStack } from 'native-base';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField } from '@atoms';
import { ProfileFormSchema } from '@validations/ProfileSettings.validator';
import { ProfileFormInputs, ProfileFormProps } from './ProfileSettingsForm.types';
import { useAuthStore } from '@store';

export const ProfileSettingsForm = ({ handleOnSubmit }: ProfileFormProps) => {
  const { user } = useAuthStore();

  const { control, handleSubmit } = useForm<ProfileFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      email: user?.email,
      fullName: user?.fullName,
    },
  });

  return (
    <>
      <VStack space={4} mb="10">
        <TextField<ProfileFormInputs>
          label="Full name"
          variant="underlined"
          px="1"
          placeholder="John Doe"
          control={{ control, name: 'fullName' }}
        />

        <TextField<ProfileFormInputs>
          label="Email"
          px="1"
          variant="underlined"
          placeholder="example@gmail.com"
          control={{ control, name: 'email' }}
        />
      </VStack>

      <Button width="full" variant="outline" onPress={handleSubmit(handleOnSubmit)}>
        Save
      </Button>
    </>
  );
};
