import { Button, Input, Layout, Text } from '@ui-kitten/components';
import React, { ReactElement, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Icon from '../../components/Icon';
import Divider from '../../components/Divider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginUser } from '../../api/endpoints';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from '../../components/Spinner';

const Login = ({ navigation }): React.ReactElement => {
  const queryClient = useQueryClient();

  const loginUserMutation = useMutation(
    (loginData: { email: string; password: string }) => loginUser(loginData),
    {
      onSuccess: (userLogged) => {
        queryClient.setQueryData(['credentials'], userLogged);
        navigation && navigation.navigate('App');
        console.log('Usuario Logueado:', userLogged);
      },
      onError: (error) => {
        console.log('Error al loguear el usuario:', error);
      },
    }
  );

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

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
      <Spinner visible={loginUserMutation.isLoading} fullscreen={true} />
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1 }}
      >
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
            onPress={() => loginUserMutation.mutate({ email, password })}
          >
            INICIAR SESIÓN
          </Button>
          <Layout style={styles.socialAuthContainer}>
            <Layout style={styles.socialAuthTextContainer}>
              <Divider size={100} />
              <Text style={styles.socialAuthHintText}>o continuar con</Text>
              <Divider size={100} />
            </Layout>

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
            appearance="ghost"
            // status='control'
            onPress={onSignUpButtonPress}
          >
            ¿Nuevo en Ayenda? Regístrate
          </Button>
        </Layout>
      </KeyboardAwareScrollView>
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
    marginBottom: 32,
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
    // alignSelf: 'center',
    marginBottom: 5,
  },
  socialAuthTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 16,
  },
});

export default Login;
