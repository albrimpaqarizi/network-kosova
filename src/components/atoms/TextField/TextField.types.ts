import { IInputProps } from 'native-base';
import { UseControllerProps, FieldValues } from 'react-hook-form';

export interface InputProps<TFieldValues extends FieldValues> extends IInputProps {
  control: UseControllerProps<TFieldValues>;
  label?: string;
}
