/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-09T12:02:14+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: RegisterForm.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-14T22:10:41+03:00
 */



import {StyleSheet,Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const containerWidth = Dimensions.get('window').width * 0.7

 const RegisterFormStyle= StyleSheet.create({

   mainViewStyle: {
     height         : height,
     backgroundColor: 'transparent',
     flexDirection  : 'column',
     justifyContent : 'flex-end',
     alignItems     : 'center',
   },

   backgroundImage: {
     height    : height,
     alignItems: 'center'

   },

   titleStyle: {
     flex          : 5,
     padding       : 5,
     alignItems    : 'flex-start',
     justifyContent: 'flex-end',
     paddingBottom : 50,
   },

   titleTextStyle: {
     width        : containerWidth,
     fontSize     : 40,
     color        : '#fff',
     alignItems   : 'flex-start',
     paddingBottom: 5,
   },
   errorTextStyle: {
     fontSize : 20,
     alignSelf: 'center',
     color    : 'red'
   },
   ContainerStyle: {
      width   : containerWidth,
      height: 10
   },
   loginButtonStyle :{
     height : 30,
     backgroundColor:'#1A237E',
     width   : containerWidth,
   },

   registerButtonStyle :{
     height : 30,
     backgroundColor:'#1565C0',
     width   : containerWidth,
   },
   inputStyle :{
     height : 15,
     color :'#1A237E',
     width   : containerWidth
   }

});

export default RegisterFormStyle;
