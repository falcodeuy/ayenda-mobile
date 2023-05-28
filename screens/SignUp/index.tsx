import {
  Button,
  CheckBox,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import React, { ReactElement, useCallback, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Icon from '../../components/Icon';
import Divider from '../../components/Divider';
import ProfileAvatar from '../../components/ProfileAvatar';

const SignUp = ({ navigation }): React.ReactElement => {
  const [userName, setUserName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();

  const onSignUpButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  const onSignInButtonPress = (): void => {
    navigation && navigation.navigate('Login');
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

  const renderCheckboxLabel = useCallback(
    (evaProps) => (
      <Text {...evaProps} style={styles.termsCheckBoxText}>
        Acepto los Términos y Condiciones
      </Text>
    ),
    []
  );

  const renderEditAvatarButton = (): React.ReactElement => (
    <Button
      style={styles.editAvatarButton}
      status="basic"
      accessoryRight={<Icon name="plus" fill={theme['color-primary-500']} />}
    />
  );

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <Layout style={styles.container}>
      <Layout style={styles.headerContainer}>
        <ProfileAvatar
          style={styles.profileAvatar}
          resizeMode="contain"
          source={require('../../assets/image-person.png')}
          editButton={renderEditAvatarButton}
        />
      </Layout>
      <Layout style={styles.formContainer}>
        <Input
          // status="control"
          autoCapitalize="none"
          placeholder="User Name"
          accessoryRight={<Icon name="person" />}
          value={userName}
          onChangeText={setUserName}
        />
        <Input
          style={styles.formInput}
          // status="control"
          autoCapitalize="none"
          placeholder="Email"
          // label={<Text category="label">Email</Text>}
          accessoryRight={<Icon name="email" />}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.formInput}
          // status="control"
          autoCapitalize="none"
          secureTextEntry={!passwordVisible}
          placeholder="Password"
          accessoryRight={renderPasswordIcon}
          value={password}
          onChangeText={setPassword}
        />
        <CheckBox
          style={styles.termsCheckBox}
          checked={termsAccepted}
          onChange={(checked: boolean) => setTermsAccepted(checked)}
        >
          {renderCheckboxLabel}
        </CheckBox>
      </Layout>
      <Button
        style={styles.signUpButton}
        size="giant"
        onPress={onSignUpButtonPress}
      >
        CREAR CUENTA
      </Button>
      <Layout style={styles.socialAuthContainer}>
        <Layout style={styles.socialAuthTextContainer}>
          <Divider size={100} />
          <Text style={styles.socialAuthHintText}>o registrate con</Text>
          <Divider size={100} />
        </Layout>
        <Layout style={styles.socialAuthButtonsContainer}>
          <Button
            appearance="ghost"
            size="giant"
            // status='control'
            accessoryLeft={<Icon name="google" />}
          />
          <Button
            appearance="ghost"
            size="giant"
            // status='control'
            accessoryLeft={<Icon name="facebook" />}
          />
          <Button
            appearance="ghost"
            size="giant"
            // status='control'
            accessoryLeft={<Icon name="twitter" />}
          />
        </Layout>
      </Layout>
      <Button
        style={styles.signInButton}
        appearance="ghost"
        // status="control"
        onPress={onSignInButtonPress}
      >
        ¿Ya tienes una cuenta? Inicia sesión
      </Button>
    </Layout>
    // </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 176,
  },
  profileAvatar: {
    width: 150,
    height: 150,
    borderRadius: 46,
    alignSelf: 'center',
    // backgroundColor: 'background-basic-color-1',
    tintColor: 'text-hint-color',
  },
  editAvatarButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  formInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 24,
  },
  termsCheckBoxText: {
    // color: 'text-control-color',
    marginLeft: 10,
  },
  signUpButton: {
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  socialAuthContainer: {
    marginTop: 24,
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

export default SignUp;
