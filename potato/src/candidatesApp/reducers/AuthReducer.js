/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: AuthReducer.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-10T14:10:32+03:00
 */



/**
 * Created by Lena on 08.08.2017.
 */
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REGISTER_USER,
  REGISTRATION_USER_SUCCESS,
  REGISTRATION_USER_FAIL
}
  from '../settings/settings'

const INITIAL_STATE = {
  email   : '',
  password: '',
  user    : null,
  loading : false,
  error   : '',
  registrationError: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload, error: ''};
    case LOGIN_USER:
      return {...state, loading: true, error: ''};
    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload, loading: false};
    case  LOGIN_USER_FAIL:
      return {...state, error: 'Authentication failed.', password: '', loading: false};
    case REGISTER_USER:
      return {...state, registrationLoading: true, registrationError: ''};
    case REGISTRATION_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload, loading: false};
    case  REGISTRATION_USER_FAIL:
      return {...state, registrationError: 'Registration failed.', password: '', loading: false};
    default:
      return state
  }
}
