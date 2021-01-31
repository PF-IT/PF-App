import 'react-native-gesture-handler'; // navigation dependencies
import React, { useEffect, useState } from 'react';

import { request } from 'graphql-request';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import { AppNavigator } from './components/navigation/Navigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import useSWR, { SWRConfig } from 'swr';
import { graphql } from 'graphql';
import { getToken } from './utils/api';

const basicConContext = React.createContext(false);

export default function App() {
  const isLoadingComplete = useCachedResources();

  // TODO: only request new token if none exist or owning an invalid token
  const {token, isLoading, isError} = getToken();
  if (token) {
    console.log("JWT token received!");
    console.log(token);
  }
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <StatusBar style='auto' />
          <AppNavigator />
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