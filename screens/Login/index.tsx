import { Button, Input, Layout, Text } from '@ui-kitten/components';
import React, { ReactElement } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../../components/Icon';

const Login = ({ navigation }): React.ReactElement => {
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

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
    <SafeAreaView style={{ flex: 1 }}>
      {/* <KeyboardAvoidingView behavior="padding" style={styles.container}> */}
      <Layout style={styles.headerContainer}>
        <Text category="h1">Hello</Text>
        <Text category="s1">Sign in to your account</Text>
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
          placeholder="Password"
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
            Forgot your password?
          </Button>
        </Layout>
      </Layout>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
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
