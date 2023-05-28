import { Divider } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

type MyDividerProps = {
  size?: number;
  color?: string;
  style?: any;
};

const MyDivider: React.FC<MyDividerProps> = ({ size, color, style }) => {
  const styles = StyleSheet.create({
    divider: {
      width: size || 60,

      backgroundColor: color || '#8F9BB3',
    },
  });

  return <Divider style={styles.divider} />;
};

export default MyDivider;
