import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Button, HStack, Radio, VStack } from 'native-base';
import { zodResolver } from '@hookform/resolvers/zod';
import { RadioField, TextField } from '@atoms';
import { ProfileFormSchema } from '@validations/ProfileSettings.validator';
import { ProfileFormInputs, ProfileFormProps } from './ProfileSettingsForm.types';

export const ProfileSettingsForm = ({ data, handleOnSubmit }: ProfileFormProps) => {
  const { control, handleSubmit } = useForm<ProfileFormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: { ...data },
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

        <RadioField<ProfileFormInputs>
          px="1"
          label="Gender"
          name="gender"
          variant="underlined"
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
      </VStack>

      <Button width="full" variant="outline" onPress={handleSubmit(handleOnSubmit)}>
        Save
      </Button>
    </>
  );
};
