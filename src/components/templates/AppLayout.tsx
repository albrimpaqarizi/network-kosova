import { NativeBaseProvider, Center, extendTheme } from "native-base";
import React, { FC } from "react";
import { config } from "../../theme/theme";

const customTheme = extendTheme({ config });

export const AppLayout: FC = ({ children }) => (
  <NativeBaseProvider theme={customTheme}>
    <Center flex={1} px="3">
      {children}
    </Center>
  </NativeBaseProvider>
);
