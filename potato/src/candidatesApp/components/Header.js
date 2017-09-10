/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: Header.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-09T19:54:36+03:00
 */



/**
 * Created by Lena on 06.07.2017.
 */

import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles'

const Header = (props) => {
  const {textStyle, viewStyle} = styles.HeaderStyle;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};


export {Header};
