import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import AppNavigator from './navigation';

import { default as theme } from './theme.json';
import AuthNavigator from './navigation/AuthNavigator';

export default () => {
  const queryClient = new QueryClient();
  const darkMode = false;

  return (
    <QueryClientProvider client={queryClient}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={
          darkMode ? { ...eva.dark, ...theme } : { ...eva.light, ...theme }
        }
      >
        {/* <AppNavigator /> */}
        <AuthNavigator />
      </ApplicationProvider>
    </QueryClientProvider>
  );
};
