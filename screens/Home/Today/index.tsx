import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useQuery } from '@tanstack/react-query';
import { getServices } from '../../../api/endpoints';

import { RootStackParamList } from '../../../types';
import AppointmentCard from './AppointmentCard';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // get services from backend
  const {
    data: services,
    isLoading,
    isError,
    error,
  } = useQuery(['services'], () => getServices());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    services &&
    services.map((service: any) => (
      <AppointmentCard key={service.id} service={service} />
    ))
  );
};

export default HomeScreen;
