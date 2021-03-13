import React, { useEffect, useState } from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import { AppNavigator } from './components/navigation/Navigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AuthProvider } from './utils/Auth';

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});