import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button } from '@ui-kitten/components';
import { default as theme } from './theme.json';

export default () => {
  const darkMode = false;

  return (
    <ApplicationProvider
      {...eva}
      theme={darkMode ? { ...eva.dark, ...theme } : { ...eva.light, ...theme }}
    >
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Button>HOME</Button>
      </Layout>
    </ApplicationProvider>
  );
};
