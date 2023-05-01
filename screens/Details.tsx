import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
  IconElement,
} from '@ui-kitten/components';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import { RootStackParamList } from '../types';

type DetailsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Details'>;
};

const IconSimpleUsageShowcase = (): IconElement => (
  <Icon style={styles.icon} fill="#8F9BB3" name="arrow-back-outline" />
);

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction
      icon={<IconSimpleUsageShowcase />}
      onPress={navigateBack}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="MyApp"
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
