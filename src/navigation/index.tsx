import * as React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import LinkingConfiguration from './LinkingConfiguration';
import RootNavigator from './Root.navigator';

const Navigation = () => (
  <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
    <RootNavigator />
  </NavigationContainer>
);

export default Navigation;
