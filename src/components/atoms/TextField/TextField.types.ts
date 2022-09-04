import { IInputProps } from 'native-base';
import { UseControllerProps } from 'react-hook-form';

export interface InputProps<TFieldValues> extends IInputProps {
  control: UseControllerProps<TFieldValues>;
}
