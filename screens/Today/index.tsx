import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList } from '../../types';
import AppointmentCard from './AppointmentCard';
type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppointmentCard />
    </SafeAreaView>
  );
};

export default HomeScreen;
