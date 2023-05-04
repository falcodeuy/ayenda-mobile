import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';

import Today from '../screens/Today';
import Week from '../screens/Week';

const HomeTopTabStack = createMaterialTopTabNavigator();

const HomeTopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <Tab title="USERS" />
    <Tab title="ORDERS" />
  </TabBar>
);

const HomeStack = () => {
  return (
    <HomeTopTabStack.Navigator tabBar={(props) => <HomeTopTabBar {...props} />}>
      <HomeTopTabStack.Screen name="Today" component={Today} />
      <HomeTopTabStack.Screen name="Week" component={Week} />
    </HomeTopTabStack.Navigator>
  );
};

const Navigator = () => (
  <NavigationContainer>
    <HomeStack />
  </NavigationContainer>
);

export default Navigator;
