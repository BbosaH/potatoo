/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-09T15:41:13+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: CandidatePreview.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-09T19:45:03+03:00
 */



import {StyleSheet,Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const containerWidth = Dimensions.get('window').width * 0.7;

 const CandidatePreviewStyle= StyleSheet.create({

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
   headerTitleTextStyle:{
     alignSelf: 'center',
     color: "#206C97",
     fontWeight: 'normal'
   },
   titleTextStyle:{
     alignSelf: 'center',
     paddingTop: 10,
     color: "#206C97",
    fontSize: 18
  },
  footView :{

    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  lowerButtonView : {
    flex: 1,
    margin: 10
  }

});

export default CandidatePreviewStyle;
