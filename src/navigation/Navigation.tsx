/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import LinkingConfiguration from "./LinkingConfiguration";
import { RootNavigator } from "./RootNavigator";

export const Navigation = ({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};
