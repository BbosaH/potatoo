/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-09T15:51:25+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: CandidatesList.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-09T19:45:29+03:00
 */



import {StyleSheet,Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const containerWidth = Dimensions.get('window').width * 0.7

 const CandidateListStyle= StyleSheet.create({

   headerTitleTextStyle : {

     alignSelf: 'center',
     color: "#206C97",
     fontWeight: 'normal'

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
   }

});

export default CandidateListStyle;
