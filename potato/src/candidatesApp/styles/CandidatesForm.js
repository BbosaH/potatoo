/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-09T15:55:03+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: CandidatesForm.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-10T07:35:48+03:00
 */

import {StyleSheet,Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const containerWidth = Dimensions.get('window').width * 0.7

 const CandidatesFormStyle= StyleSheet.create({

  titleStyle :{
    alignSelf: 'center',
    paddingTop: 10,
    color: "#206C97",
    fontSize: 18
  },
   textStyle: {
     color     : '#3c3c3c',
     fontSize  : 18,
     lineHeight: 23,
     alignSelf : 'stretch',
   },
   viewStyle: {
     alignItems : 'flex-start',
     alignSelf  : 'stretch',
     marginLeft : 15,
     marginRight: 15,
     marginTop  : 15,
   },
   DetailsTextStyle :{
     color          : '#1d1d1d',
     paddingRight   : 5,
     paddingLeft    : 5,
     fontSize       : 18,
     lineHeight     : 23,
     height         : 200,
     alignSelf      : 'stretch',
     backgroundColor: '#fff',
     elevation      : 10
   }

});

export default CandidatesFormStyle;
