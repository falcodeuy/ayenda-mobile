import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import lightTheme from './lightTheme.json';
import darkTheme from './darkTheme.json';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { StatusBar, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './navigation';
import AuthNavigator from './navigation/AuthNavigator';

type CustomStatusBarProps = {
  backgroundColor: string;
  barStyle: any;
};

const CustomStatusBar = ({
  backgroundColor,
  barStyle,
}: //add more props StatusBar
CustomStatusBarProps): React.ReactElement => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};

export default () => {
  const queryClient = new QueryClient();
  const darkMode = true;
  const Stack = createStackNavigator();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <CustomStatusBar
          barStyle={darkMode ? 'light-content' : 'dark-content'}
          backgroundColor={darkMode ? '#000000' : '#FFFFFF'}
        />
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          {...eva}
          theme={
            darkMode
              ? { ...eva.dark, ...darkTheme }
              : { ...eva.light, ...lightTheme }
          }
        >
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Auth" component={AuthNavigator} />
              <Stack.Screen name="App" component={AppNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
