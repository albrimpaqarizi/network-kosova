// react
import React, { FC } from 'react';

// native
import { View } from 'react-native';

import { spacing, palette } from '@styles/index';

// types
import { BoxProps } from './Box.types';

const Box: FC<BoxProps> = ({ padding, margin, backgroundColor, ...rest }) => (
  <View
    style={{
      margin: spacing[margin || 'md'],
      padding: spacing[padding || 'md'],
      backgroundColor: palette[backgroundColor || 'white'],
    }}
    {...rest}
  />
);

export default Box;
