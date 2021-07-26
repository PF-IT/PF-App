import "react-native-gesture-handler"; // navigation dependencies
import React from "react";

import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Button,
  Divider,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components"

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { StyleSheet } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import { AppNavigator } from "./components/navigation/Navigator";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { default as theme } from "./PFThemeLight.json"; // <-- Import app theme
import { default as mapping } from "./mapping.json"; // <-- Import app mapping
import { AuthProvider } from "./utils/Auth";

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const previousHandler = ErrorUtils.getGlobalHandler();
  // ErrorUtils.setGlobalHandler((error, isFatal) => {
  //   console.log(error);
  // })
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva}
        theme={{ ...eva.light, ...theme }}
        customMapping={mapping}>
          <AuthProvider>
            <StatusBar style='auto' />
            <AppNavigator />
          </AuthProvider>
        </ApplicationProvider>
        </>
    );
  }
}

const styles = StyleSheet.create({
  category: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
