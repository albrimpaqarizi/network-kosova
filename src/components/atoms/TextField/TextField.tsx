import React from 'react';
import { Input } from 'native-base';
import { FieldValues, useController } from 'react-hook-form';
import { InputProps } from './TextField.types';

// eslint-disable-next-line prettier/prettier
export const TextField = <TFieldValues extends FieldValues = FieldValues>({
  control,
  px = '4',
  w = '100%',
  fontSize = 'sm',
  // eslint-disable-next-line prettier/prettier
  ...rest
}: InputProps<TFieldValues>) => {
  const { field } = useController(control);

  return (
    <Input
      w={w}
      px={px}
      fontSize={fontSize}
      value={field.value}
      onChangeText={field.onChange}
      {...rest}
    />
  );
};
