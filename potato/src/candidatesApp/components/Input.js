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
        style={styles.TextInputStyle.inputStyle}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid='rgba(0,0,0,0)'
      />

  );
};

export {Input};
