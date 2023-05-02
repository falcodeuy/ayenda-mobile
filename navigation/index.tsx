import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import { RootStackParamList } from '../types';

const BottomStack = createBottomTabNavigator<RootStackParamList>();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Home" />
    <BottomNavigationTab title="Details" />
  </BottomNavigation>
);
const TabNavigator = () => (
  <BottomStack.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <BottomStack.Screen name="Home" component={HomeScreen} />
    <BottomStack.Screen name="Details" component={DetailsScreen} />
  </BottomStack.Navigator>
);

export const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
