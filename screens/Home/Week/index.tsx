import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@ui-kitten/components';

import { RootStackParamList } from '../../../types';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text category="h1">WEEEEEEEEEEKK</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
