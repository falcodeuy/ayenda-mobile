import { Button, Input, Layout, Text } from '@ui-kitten/components';
import React, { ReactElement, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Icon from '../../components/Icon';

const Login = ({ navigation }): React.ReactElement => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const onSignInButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  const onSignUpButtonPress = (): void => {
    navigation && navigation.navigate('SignUp');
  };

  const onForgotPasswordButtonPress = (): void => {
    navigation && navigation.navigate('ForgotPassword');
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const renderPasswordIcon = (props: any): ReactElement => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <View>
        <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'} />
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <>
      {/* <KeyboardAvoidingView behavior="padding" style={styles.container}> */}
      <Layout style={styles.container}>
        <Layout style={styles.headerContainer}>
          <Text category="h1">Bienvenido!</Text>
          <Text category="s1">Inicia sesión en tu cuenta</Text>
        </Layout>
        <Layout style={styles.formContainer}>
          <Input
            // status='control'
            placeholder="Email"
            accessoryRight={<Icon name="person" />}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.passwordInput}
            // status={passwordVisible ? 'control' : 'danger'}
            placeholder="Contraseña"
            accessoryRight={renderPasswordIcon}
            value={password}
            secureTextEntry={!passwordVisible}
            onChangeText={setPassword}
          />
          <Layout style={styles.forgotPasswordContainer}>
            <Button
              style={styles.forgotPasswordButton}
              appearance="ghost"
              // status='control'
              onPress={onForgotPasswordButtonPress}
            >
              ¿Olvidaste tu contraseña?
            </Button>
          </Layout>
        </Layout>
        <Button
          style={styles.signInButton}
          size="giant"
          onPress={onSignInButtonPress}
        >
          INICIAR SESIÓN
        </Button>
        <Layout style={styles.socialAuthContainer}>
          <Text
            style={styles.socialAuthHintText}
            // status='control'
          >
            o continuar con
          </Text>
          <Layout style={styles.socialAuthButtonsContainer}>
            <Button
              appearance="ghost"
              // status='control'
              size="giant"
              accessoryLeft={<Icon name="google" />}
            />
            <Button
              appearance="ghost"
              // status='control'
              size="giant"
              accessoryLeft={<Icon name="facebook" />}
            />
            <Button
              appearance="ghost"
              // status='control'
              size="giant"
              accessoryLeft={<Icon name="twitter" />}
            />
          </Layout>
        </Layout>
        <Button
          style={styles.signUpButton}
          appearance='ghost'
          // status='control'
          onPress={onSignUpButtonPress}>
          ¿Nuevo en Ayenda? Regístrate
        </Button>
      </Layout>
      {/* </KeyboardAvoidingView> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  signUpButton: {
    marginVertical: 12,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  socialAuthButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialAuthHintText: {
    alignSelf: 'center',
    marginBottom: 16,
  },
});

export default Login;
