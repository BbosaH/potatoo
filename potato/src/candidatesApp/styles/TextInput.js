/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-09T12:02:14+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: TextInput.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-09T19:46:11+03:00
 */



import {StyleSheet} from 'react-native';
//const {StyleSheet} = React;

 const TextInputStyle= StyleSheet.create({

  inputStyle: {
    color: '#1d1d1d',
    backgroundColor:'#ffffff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    // lineHeight:23,

  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  }

});

export default TextInputStyle;
