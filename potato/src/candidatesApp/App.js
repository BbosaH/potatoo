/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: App.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-10T13:56:25+03:00
 */



/**
 * Created by Lena on 03.08.2017.
 */

import React, {Component} from 'react';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import RegisterForm from './screens/RegisterForm';
import {StackNavigator} from 'react-navigation'
import CandidatesList from './screens/CandidatesList'
import ListItem from './components'
import CandidatesForm from './screens/CandidatesForm'
import CandidatePreview from './screens/CandidatePreview'



const BasicApp = StackNavigator({

   Register   :  {screen: RegisterForm},
   CandidatesForm: {screen: CandidatesForm},
   CandidatesList: {screen: CandidatesList},
   CandidatePreview: {screen: CandidatePreview}
  //CandidatesListOLD: {screen: CandidatesListOLD}

});

class App extends Component {

  componentWillMount() {
    const config = {

      apiKey           : "AIzaSyDZYlySNVAPsym5GCTMCgE4x_p7GsFpWKo",
      authDomain       : "potato-5211a.firebaseapp.com",
      databaseURL      : "https://potato-5211a.firebaseio.com",
      projectId        : "potato-5211a",
      storageBucket    : "potato-5211a.appspot.com",
      messagingSenderId: "397918687238"

      // apiKey: "AIzaSyDxWV4NUN6m79uq_zlej3mfR2Dan8DWlw4",
      // authDomain: "potato-99918.firebaseapp.com",
      // databaseURL: "https://potato-99918.firebaseio.com",
      // projectId: "potato-99918",
      // storageBucket: "potato-99918.appspot.com",
      // messagingSenderId: "811049279083"

    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <BasicApp/>
      </Provider>
    )
  }
}

export default App;
