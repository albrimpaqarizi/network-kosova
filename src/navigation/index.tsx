import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LinkingConfiguration from './LinkingConfiguration';
import RootNavigator from './Root.navigator';

const Navigation = () => (
  <NavigationContainer
    linking={LinkingConfiguration}
    // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
  >
    <RootNavigator />
  </NavigationContainer>
);

export default Navigation;
