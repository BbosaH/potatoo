/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: AuthActions.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-12T19:27:09+03:00
 */



/**
 * Created by Lena on 08.08.2017.
 */
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTRATION_USER_FAIL
}
  from '../settings/settings'

import firebase from 'firebase'

export const emailChanged = (text) => {
  return {
    type   : EMAIL_CHANGED,
    payload: text,
  }
}

export const passwordChanged = (text) => {
  return {
    type   : PASSWORD_CHANGED,
    payload: text,
  }
}

function navigateToNextPage(navigate) {
  navigate('CandidatesList')
  //navigate('CandidatesListOLD')
}

export const loginUser = ({email, password, navigate}) => {
  console.log("The email is ==>",email);
  console.log("The email is ==>",password);
  console.log("The navigate is ==>",navigate);
  return (dispatch) => {
    dispatch({type: LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user, navigate))
            //.catch((error) => {console.log("The error :" ,error)});
            .catch(() => loginUserFail(dispatch));
  };
};

const loginUserSuccess = (dispatch, user, navigate) => {
  console.log("The user brought => " ,user);
  dispatch({
    type   : LOGIN_USER_SUCCESS,
    payload: user
  })

  navigateToNextPage(navigate)
}

const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL})
}

export const registerUser = ({email, password, navigate}) => {
  return (dispatch) => {
    dispatch({type: REGISTER_USER});

    firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user, navigate))
            .catch(() => registrationUserFail(dispatch));
  };

};


const registrationUserFail = (dispatch) => {
  dispatch({type: REGISTRATION_USER_FAIL})
}
