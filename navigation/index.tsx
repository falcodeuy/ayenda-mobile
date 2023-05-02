import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import { RootStackParamList } from '../types';
import Icon from '../components/Icon';

const BottomStack = createBottomTabNavigator<RootStackParamList>();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Agenda" icon={<Icon name="calendar" />} />
    <BottomNavigationTab
      title="Estadísticas"
      icon={<Icon name="bar-chart" />}
    />
    <BottomNavigationTab title="Perfil" icon={<Icon name="person" />} />
  </BottomNavigation>
);
const TabNavigator = () => (
  <BottomStack.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <BottomStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <BottomStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{ headerShown: false }}
    />
    <BottomStack.Screen
      name="Profile"
      component={DetailsScreen}
      options={{ headerTitle: 'Perfil' }}
    />
  </BottomStack.Navigator>
);

export const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
