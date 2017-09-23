/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: RegisterForm.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-22T08:55:55+03:00
 */



/**
 * Created by Lena on 11.08.2017.
 */
import React, {Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import { TextInput } from '@shoutem/ui'
// import { Form, FormItem } from 'react-native-form-validation';
import {ContainerSection, Input, Spinner} from '../components';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser, registerUser} from '../actions/AuthActions'
import { Button } from 'react-native-elements'
import styles from '../styles'

import {EMAIL_REG_EXP} from '../settings/settings';

var containerFullwidth = Dimensions.get('window').width; //full width
var containerHeight = Dimensions.get('window').height; //full height
var containerWidth = Dimensions.get('window').width * 0.7

const {
  mainViewStyle,
  errorTextStyle,
  backgroundImage,
  titleStyle,
  titleTextStyle,
  containerStyle,
  loginButtonStyle,
  registerButtonStyle,
  inputStyle
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
    const {email, password, navigate } = this.props;

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

      <Button
      onPress={this.onLoginButtonPress.bind(this)}
      raised
      icon={{name: 'lock', type: 'font-awesome'}}
      buttonStyle={loginButtonStyle}
      title='Login' />
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

      <Button
      onPress={this.onRegisterButtonPress.bind(this)}
      raised
      icon={{name: 'envira', type: 'font-awesome'}}
      buttonStyle= {registerButtonStyle}
      title='Register' />
    )
  }



  render() {
    return (
      <View style={{width:containerFullwidth,backgroundColor: '#BCAAA4',flexDirection  : 'column',
      justifyContent: 'center',height:containerHeight}}>

          <TextInput
            inputStyle={inputStyle}
            placeholder="Email Address"
            onChangeText={this.onEmailChange.bind(this)}
            />
          <View style={{height:5}}/>
            <TextInput secureTextEntry
              password="true"
              inputStyle={{width:300}}
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              password={true}
            />
          <View style={{height:15}}/>

              <Button title="Login"
                      raised
                      icon={{name: 'lock' , type:'font-awesome'}}
                      backgroundColor="#3E2723"
                      color="#ffffff"
                      buttonStyle={loginButtonStyle}
                      onPress={this.onLoginButtonPress.bind(this)}
                      />


              <View style={{height:5}}/>

              <Button title="Register as new User"
                      raised
                      icon={{name: 'envira' , type:'font-awesome'}}
                      backgroundColor="#5D4037"
                      color="#ffffff"
                      buttonStyle={loginButtonStyle}
                      onPress={this.onRegisterButtonPress.bind(this)}
                      />
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
