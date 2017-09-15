/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: CandidatesActions.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-15T20:28:19+03:00
 */



/**
 * Created by Lena on 18.08.2017.
 */
import {CANDIDATE_UPDATE, CANDIDATES_FETCH_SUCCESS, CANDIDATE_CREATE, CANDIDATE_SAVE_SUCCESS, CANDIDATE_PREVIEW_NAVIGATE} from '../settings/settings'
import firebase from 'firebase';

// export const candidateUpdate = ({prop, value}) => {
//   return {
//     type   : CANDIDATE_UPDATE,
//     payload: {prop, value}
//   };
// };
export const candidateUpdate = ({prop,value,candidate_id}) => {

  const {currentUser} = firebase.auth();
  const uid = candidate_id;

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/candidates/${uid}/status`)
      .set(value)
      .then(() => {

        dispatch({
          type: CANDIDATE_UPDATE,
          payload: {prop, value}
        })

      })
  };
};

export const candidatesFetch = () => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/candidates`)
            .on('value', snapshot => {
              dispatch({type: CANDIDATES_FETCH_SUCCESS, payload: snapshot.val()});
            });
  };
};

export const candidateCreate = ({
                                  name,
                                  email,
                                  level,
                                  jsyears,
                                  feyears,
                                  ghlink,
                                  skills,
                                  project,
                                  notice,
                                  zone,
                                  based,
                                  current,
                                  salary,
                                  whereaurity,
                                  courses,
                                  details,
                                  status,
                                  education,
                                }) => {

  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/candidates`)
            .push({
              name,
              email,
              level,
              jsyears,
              feyears,
              ghlink,
              skills,
              project,
              notice,
              zone,
              based,
              current,
              salary,
              whereaurity,
              courses,
              details,
              status,
              education
            })
            .then(() => {
              dispatch({type: CANDIDATE_CREATE});
            });
  };

};

export const candidateSave = ({name, email, details, status}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/candidates/${uid}`)
            .set({name, email, details, status})
            .then(() => {
              dispatch({type: CANDIDATE_SAVE_SUCCESS})
              console.log('saved')
            })
  }
}

function navigateToNextPage(navigate) {
  navigate('CandidatePreview')
}

export const candidatePreviewNavigate = (navigate) => {



  return (dispatch) => {

    dispatch({
      type   : CANDIDATE_PREVIEW_NAVIGATE,
    })
    console.log('action!')

  };
}
