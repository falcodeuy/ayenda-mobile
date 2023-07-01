import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useQuery } from '@tanstack/react-query';
import { Text } from '@ui-kitten/components';

import { RootStackParamList } from '../../types';
import AppointmentCard from './AppointmentCard';
import { getServices } from '../../api/endpoints';
import Spinner from '../../components/Spinner';

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
    return <Spinner visible />;
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  return services ? (
    services.map((service: any) => (
      <AppointmentCard key={service.id} service={service} />
    ))
  ) : (
    <Text>No hay servicios disponibles</Text>
  );
};

export default HomeScreen;
