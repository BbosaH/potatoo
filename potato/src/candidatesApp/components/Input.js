/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-12T15:43:06+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: Input.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-18T20:09:54+03:00
 */



/**
 * Created by Lena on 14.07.2017.
 */
import React from 'react';
import {TextInput, View} from 'react-native';
import { FormItem } from 'react-native-form-validation';
import styles from '../styles'

const Input = ({value, onChangeText, placeholder, secureTextEntry}) => {
const {inputStyle, containerStyle, password} = styles;
  return (

      <TextInput
        secureTextEntry={secureTextEntry}
        password={password}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid='rgba(0,0,0,0)'
      />

  );
};

export {Input};
