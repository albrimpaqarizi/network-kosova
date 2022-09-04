import React from 'react';
import { Input } from 'native-base';

import { InputProps } from './TextField.types';
import { FieldValues, useController } from 'react-hook-form';

export const TextField = <TFieldValues extends FieldValues = FieldValues>({
  control,
  px = '4',
  w = '100%',
  fontSize = 'sm',
  ...rest
}: InputProps<TFieldValues>) => {
  const { field } = useController(control);

  return (
    <Input
      w={w}
      px={px}
      {...rest}
      fontSize={fontSize}
      value={field.value}
      onChangeText={field.onChange}
    />
  );
};
