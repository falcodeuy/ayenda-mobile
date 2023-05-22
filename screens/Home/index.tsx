import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../types';
import AppointmentCard from './AppointmentCard';
type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return <AppointmentCard />;
};

export default HomeScreen;
