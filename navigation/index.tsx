import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import { RootStackParamList } from '../types';

const RootStack = createStackNavigator<RootStackParamList>();

const HomeNavigator: React.FC = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name="Home" component={HomeScreen} />
    <RootStack.Screen name="Details" component={DetailsScreen} />
  </RootStack.Navigator>
);

export const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
