import 'react-native-gesture-handler'; // navigation dependencies
import React from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Divider, Layout, Text } from '@ui-kitten/components';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import { AppNavigator } from './navigation/Navigator';

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppNavigator/>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  category: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});