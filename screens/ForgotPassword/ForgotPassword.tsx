import { Button, Input, Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Icon from '../../components/Icon';

const ForgotPassword = ({ navigation }): React.ReactElement => {
  const [email, setEmail] = useState<string>();

  const onResetPasswordButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  return (
    <Layout style={styles.container}>
      <Text style={styles.forgotPasswordLabel} category="h4">
        Has olvidado tu contraseña
      </Text>
      <Text style={styles.enterEmailLabel}>
        Por favor ingresa tu correo electrónico
      </Text>
      <Layout style={styles.formContainer}>
        <Input
          placeholder="Email"
          accessoryRight={<Icon name="email" />}
          value={email}
          onChangeText={setEmail}
        />
      </Layout>
      <Button size="giant" onPress={onResetPasswordButtonPress}>
        ESTABLECER CONTRASEÑA
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 24,
  },
  forgotPasswordLabel: {
    zIndex: 1,
    alignSelf: 'center',
    marginTop: 24,
  },
  enterEmailLabel: {
    zIndex: 1,
    alignSelf: 'center',
    marginTop: 64,
  },
});

export default ForgotPassword;
