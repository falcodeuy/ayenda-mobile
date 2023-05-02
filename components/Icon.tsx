import React from 'react';
import { Icon, IconElement } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';

// We're using this to render Eva icons in our app. (The normal way shown in UI Kitten docs doesn't work with our stack).
// So the name of the icon is any valid name in the Eva Icons library: https://akveo.github.io/eva-icons/
// And under the hood we're using the Icon component from UI Kitten: https://akveo.github.io/react-native-ui-kitten/docs/components/icon/overview#icon

type MyIconProps = {
  size?: number;
  name: string;
  style?: any;
  fill?: string;
  animation?: any;
  animationConfig?: any;
};

const MyIcon: React.FC<MyIconProps> = ({
  size,
  name,
  fill,
  animation,
  animationConfig,
}) => {
  const styles = StyleSheet.create({
    icon: {
      width: size || 24,
      height: size || 24,
    },
  });

  return (
    <Icon
      fill={fill || '#8F9BB3'}
      style={styles.icon}
      name={name}
      animation={animation}
      animationConfig={animationConfig}
    />
  );
};

export default MyIcon;
