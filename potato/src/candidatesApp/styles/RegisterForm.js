/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-09T12:02:14+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: RegisterForm.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-22T08:54:52+03:00
 */



import {StyleSheet,Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const containerFullWidth = Dimensions.get('window').width
const containerWidth =  Dimensions.get('window').width* 0.7

 const RegisterFormStyle= StyleSheet.create({

   mainViewStyle: {
     height         : height,
     backgroundColor: '#BCAAA4',
     flexDirection  : 'column',
     justifyContent: 'center',
     alignItems     : 'center',
     width        : containerFullWidth
   },

   backgroundImage: {
     height    : height,
     alignItems: 'center'

   },

   titleStyle: {
     flex          : 2,
     padding       : 5,
     alignItems    : 'flex-start',
     justifyContent: 'center',
     paddingBottom : 30,
   },

   titleTextStyle: {
     width        : containerWidth,
     fontSize     : 30,
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
     width   : containerFullWidth,
   },

   registerButtonStyle :{
     height : 30,
     backgroundColor:'#1565C0',
     width   : containerWidth,
   },
   inputStyle :{

     height : 15,
     color :'#1A237E',
     marginLeft:10,
     width   : 300
   }

});

export default RegisterFormStyle;
