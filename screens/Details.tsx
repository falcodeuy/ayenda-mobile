import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  // Icon
} from '@ui-kitten/components';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../types';
import Icon from '../components/Icon';

type DetailsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Details'>;
};

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction
      icon={<Icon name="arrow-back-outline" />}
      onPress={navigateBack}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Ayenda"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text category="h1">DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default DetailsScreen;
