import { IRadioGroupProps } from 'native-base';
import { UseControllerProps, FieldValues } from 'react-hook-form';

export interface RadioProps<TFieldValues extends FieldValues> extends IRadioGroupProps {
  control: UseControllerProps<TFieldValues>;
  label?: string;
}
