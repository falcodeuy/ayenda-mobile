import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { default as theme } from './theme.json';
import AuthNavigator from './navigation/AuthNavigator';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar, View } from 'react-native';
import React from 'react';

type CustomStatusBarProps = {
  backgroundColor: string;
  barStyle: any;
};

const CustomStatusBar = (
  {
    backgroundColor,
    barStyle,
    //add more props StatusBar
  }: CustomStatusBarProps
): React.ReactElement => { 
   
   const insets = useSafeAreaInsets();

   return (
     <View style={{ height: insets.top, backgroundColor }}>
        <StatusBar
          animated={true}
          backgroundColor={backgroundColor}
          barStyle={barStyle} />
     </View>
   );
}

export default () => {
  const darkMode = false;

  return (
    
    <SafeAreaProvider>
      {/* <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={darkMode ? '#000000' : '#FFFFFF'}
      /> */}
      <CustomStatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} backgroundColor={darkMode ? '#000000' : '#FFFFFF'} />
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
      </SafeAreaProvider>
    
  );
};
