import { View } from "components/Themed";
import { StatusBar } from "expo-status-bar";
import useCachedResources from "hooks/useCachedResources";
import useColorScheme from "hooks/useColorScheme";
import { Navigation } from "navigation/Navigation";
import React from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return (
      <SafeAreaView>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="small" color="#0000ff" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
