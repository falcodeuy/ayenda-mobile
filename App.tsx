import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { AppNavigator } from './navigation';

import { default as theme } from './theme.json';

export default () => {
  const darkMode = false;

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={
          darkMode ? { ...eva.dark, ...theme } : { ...eva.light, ...theme }
        }
      >
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};
