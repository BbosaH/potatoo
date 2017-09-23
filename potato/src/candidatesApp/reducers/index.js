/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: index.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-18T12:42:24+03:00
 */



/**
 * Created by Lena on 08.08.2017.
 */
import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'
import CandidatesReducer from './CandidatesReducer'
import CandidatesFetchReducer from './CandidatesFetchReducer'
import LevelsFetchReducer from './LevelsFetchReducer'

export default combineReducers({
  auth: AuthReducer,
  candidates: CandidatesReducer,
  fetch: CandidatesFetchReducer,
  getLevels :LevelsFetchReducer
})
