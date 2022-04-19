import AsyncStorage from "@react-native-async-storage/async-storage";
import { extendTheme } from "native-base";

const colors = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};

export const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
