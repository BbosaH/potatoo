/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: CandidatesReducer.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-26T09:58:37+03:00
 */



/**
 * Created by Lena on 18.08.2017.
 */
import {CANDIDATE_UPDATE,CANDIDATE_STATUS_UPDATE, CANDIDATE_CREATE, CANDIDATE_SAVE_SUCCESS, CANDIDATE_PREVIEW_NAVIGATE} from '../settings/settings'

INITIAL_STATE = {
  name: '',
  email: '',
  level: '',
  jsyears: '',
  feyears: '',
  ghlink: '',
  skills: '',
  project: '',
  notice: '',
  zone: '',
  based: '',
  current: '',
  salary: '',
  whereaurity: '',
  courses: '',
  details: '',
  status: 'New',
  rating:0,
  education: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CANDIDATE_UPDATE:
      console.log("The state is =>",state);
      return {...state, [action.payload.prop]: action.payload.value};
    case CANDIDATE_STATUS_UPDATE:
        console.log("The state is =>",state);
        return {...state, [action.payload.prop]: action.payload.value};
    case CANDIDATE_CREATE:
      return INITIAL_STATE;
    case CANDIDATE_SAVE_SUCCESS:
      return INITIAL_STATE;
    case CANDIDATE_PREVIEW_NAVIGATE:
      return INITIAL_STATE
    default:
      return state;
  }
}
