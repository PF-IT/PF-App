import React, { useEffect, useState } from "react";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import useCachedResources from "./hooks/useCachedResources";
import { AppNavigator } from "./components/navigation/Navigator";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AuthProvider } from "./utils/Auth";
import { ThemeContext } from "./design/theme-context";
import Theme from "./assets/custom-theme";

export default function App() {
  //Theming
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <AuthProvider>
              <StatusBar style="auto" />
              <AppNavigator />
            </AuthProvider>
          </ApplicationProvider>
        </ThemeContext.Provider>
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
