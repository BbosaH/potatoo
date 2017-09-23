/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-18T12:29:40+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: LevelsFetchReducer.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-18T12:32:53+03:00
 */



 /**
  * @Author: Henry Bbosa <magicwand>
  * @Date:   2017-09-06T15:14:07+03:00
  * @Email:  bbosa.henry1@gmail.com
  * @Project: potato
  * @Filename: CandidatesFetchReducer.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-18T12:32:53+03:00
  */



 /**
  * Created by Lena on 27.08.2017.
  */
 import {LEVELS_FETCH_SUCCESS} from '../settings/settings';

 const INITIAL_STATE = {};

 export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case LEVELS_FETCH_SUCCESS:
       return action.payload;
     default:
       return state;
   }
 }
