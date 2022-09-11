import React from 'react';
import { FormControl, Input } from 'native-base';
import { FieldValues, useController } from 'react-hook-form';
import { InputProps } from './TextField.types';

export const TextField = <TFieldValues extends FieldValues = FieldValues>({
  label,
  control,
  px = '4',
  w = '100%',
  fontSize = 'sm',
  rounded = 'lg',
  ...rest
}: InputProps<TFieldValues>) => {
  const { field, fieldState } = useController(control);

  return (
    <FormControl isInvalid={!!fieldState.error}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        w={w}
        px={px}
        rounded={rounded}
        fontSize={fontSize}
        value={field.value}
        nativeID={field.name}
        onChangeText={field.onChange}
        {...rest}
      />

      <FormControl.ErrorMessage>{fieldState?.error?.message}</FormControl.ErrorMessage>
    </FormControl>
  );
};
