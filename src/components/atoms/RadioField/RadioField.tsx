import React from 'react';
import { FormControl, Radio } from 'native-base';
import { FieldValues, useController } from 'react-hook-form';
import { RadioProps } from './RadioField.types';

export const RadioField = <TFieldValues extends FieldValues = FieldValues>({
  label,
  control,
  px = '4',
  w = '100%',
  fontSize = 'sm',
  rounded = 'lg',
  children,
  ...rest
}: RadioProps<TFieldValues>) => {
  const { field, fieldState } = useController(control);

  return (
    <FormControl isInvalid={!!fieldState.error}>
      <FormControl.Label>{label}</FormControl.Label>

      <Radio.Group
        w={w}
        px={px}
        rounded={rounded}
        fontSize={fontSize}
        value={field.value}
        {...rest}
        nativeID={field.name}
        onChange={field.onChange}
      >
        {children}
      </Radio.Group>

      <FormControl.ErrorMessage>{fieldState?.error?.message}</FormControl.ErrorMessage>
    </FormControl>
  );
};
