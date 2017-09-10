/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: CandidatesFetchReducer.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-10T14:09:41+03:00
 */



/**
 * Created by Lena on 27.08.2017.
 */
import {CANDIDATES_FETCH_SUCCESS} from '../settings/settings';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CANDIDATES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
