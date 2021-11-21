// react
import { ComponentProps } from 'react';

// native
import { View } from 'react-native';

// styles
import { spacing, palette } from '@styles/index';

export interface BoxProps extends ComponentProps<typeof View> {
  padding?: keyof typeof spacing;
  margin?: keyof typeof spacing;
  backgroundColor?: keyof typeof palette;
}
