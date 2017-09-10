/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: RegisterForm.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-10T13:55:24+03:00
 */



/**
 * Created by Lena on 11.08.2017.
 */
import React, {Component} from 'react';
import {Text,TextInput, View, Dimensions, Image} from 'react-native';
import { Form, FormItem } from 'react-native-form-validation';
import {ContainerSection, Button, Input, Spinner} from '../components';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser, registerUser} from '../actions/AuthActions'
import styles from '../styles'

import {EMAIL_REG_EXP} from '../settings/settings';

//var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
var containerWidth = Dimensions.get('window').width * 0.7

const {
  mainViewStyle,
  errorTextStyle,
  backgroundImage,
  titleStyle,
  titleTextStyle,
  containerStyle
} = styles.RegisterFormStyle

class LoginFormEmail extends Component {



  constructor (props) {
  super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
 }
  static navigationOptions = {
    header: null
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginButtonPress() {
    const {email, password, navigate} = this.props;

    this.props.loginUser({email, password, navigate});
  }

  onRegisterButtonPress() {
    const {email, password, navigate} = this.props;

    this.props.registerUser({email, password, navigate});
  }

  renderLoginButton() {
    if (this.props.loading) {
      return <Spinner size="large"/>
    }
    else if (this.props.error) {
      return (
        <Text style={errorTextStyle}>
          {this.props.error}
        </Text>
      )
    }
    return (
      <Button onPress={this.onLoginButtonPress.bind(this)}>
        Log In
      </Button>
    )
  }

  renderRegistrationButton() {
    if (this.props.registrationLoading) {
      return <Spinner size="large"/>
    }
    else if (this.props.registrationError) {
      return (
        <Text style={errorTextStyle}>
          {this.props.registrationError}
        </Text>
      )
    }
    return (
      <Button onPress={this.onRegisterButtonPress.bind(this)}>
        Register
      </Button>
    )
  }



  render() {
    return (
      <View style={mainViewStyle}>
        <Image source={require('../img/imgLoginPage.jpg')} style={backgroundImage}>
          <View style={titleStyle}>
            <Text style={titleTextStyle}>
              YOUR
            </Text>
            <Text style={titleTextStyle}>
              TRAINING
            </Text>
            <Text style={titleTextStyle}>
              APP
            </Text>
          </View>

          <Form
            ref="loginForm"
            shouldValidate={true}

            >
            <FormItem
              isRequired={true}
              style ={containerStyle}
              >
              <Input label="Email"
                     placeholder="Email address"
                     onChangeText={this.onEmailChange.bind(this)}
                     value={this.props.email}
                     style={containerStyle}
              />
           </FormItem>

            <View style={{flex: 0.1}}/>

            <FormItem
              isRequired={true}
              style={{width: containerWidth}}
              >
              <Input secureTextEntry
                     password="true"
                     label="Password"
                     placeholder="Password"
                     onChangeText={this.onPasswordChange.bind(this)}
                     value={this.props.password}
                     style={{width: containerWidth}}
              />
            </FormItem>

         </Form>

          <View style={{flex: 0.3}}/>


          <ContainerSection style={{width: containerWidth, backgroundColor: "#2D9CDB"}}>
            {this.renderLoginButton()}
          </ContainerSection>

          <View style={{flex: 0.2}}/>

          <ContainerSection style={{width: containerWidth, backgroundColor: "#206C97"}}>
            {this.renderRegistrationButton()}
          </ContainerSection>

          <View style={{flex: 1.2}}/>

        </Image>
      </View>
    )
  }
}



const mapStateToProps = (state, props) => {
  const {auth} = state
  const {email, password, loading, error, registrationError} = auth;
  const {navigate} = props.navigation
  return {email, password, navigate, loading, error, registrationError};
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser, registerUser})(LoginFormEmail)
