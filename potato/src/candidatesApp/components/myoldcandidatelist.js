/**
 * Created by Lena on 26.08.2017.
 */
import React, {Component} from 'react';
import _ from 'lodash';
import {Text, View, Button, ListView} from 'react-native';
import {connect} from 'react-redux';
import {candidatesFetch, candidatePreviewNavigate} from '../actions/CandidatesActions';
//import {ListItem} from '../common'
import ListItemRedux from './ListItemREDUX'
//import {ListItemConst} from './ListItemConst'
//import ListItem from './ListItem'


class CandidatesList extends Component {

  var navi = {};

  constructor(props) {

         super(props);
         //console.log(this.props);
  }

  static navigationOptions = ({navigation}) => {
    const {navigate} = navigation;
    navi = navigate
    console.log("This naviate is" , navigation);


    return {
      title      : <Text style={{alignSelf: 'center', color: "#206C97", fontWeight: 'normal'}}>List of
        Candidates</Text>,
      headerRight: (<Button title="Add New Candidate"
                            onPress={() => navigate('CandidatesForm')}/>),
      headerLeft : null
    }
  }

  componentWillMount() {
    this.props.candidatesFetch();
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({candidates}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(candidates)
  }

  //onListedItemPress() {
  //  const {navigate} = this.props;
  //  this.props.candidatePreviewNavigate({navigate});
  //}




  renderRow(candidate, navigation) {


    const  onCandidatePress=()=>{

      const {navigate} = navigation;
      console.log("The nav oooo is =>" , navigate);
      this.props.candidatePreviewNavigate({navigate});

    }
    return <ListItemRedux onPress={()=>{onCandidatePress()}} candidate={candidate}/>;
  }

  render() {
    //const {navigate} = this.props.navigation;
    //console.log(this.props);
    //console.log("This is render navigate", this.props);
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}</ListView>
          renderRow={this.renderRow}
        />
        <View style={{margin: 10}}>
          <Button title="Add new Candidate"
                  onPress={() => navigate('CandidatesForm')}/>
        </View>
      </View>
    )
  }


}

const mapStateToProps = (state, props) => {

  const candidates = _.map(state.fetch, (val, uid) => {
    return {...val, uid};
  });
  const {navigate} = props.navigation

  return {candidates, navigate};
}

export default connect(mapStateToProps, {candidatesFetch, candidatePreviewNavigate})(CandidatesList);


//OLD CODE WITH STATE

//import React, {Component} from 'react'
//import {Text, View, Button, ListView} from 'react-native';
//import * as firebase from 'firebase';
//
//const ListItem = require('../common/ListItem');
//const styles = require('../common/styles');
//
//class CandidatesListTrial extends Component {
//
//  static navigationOptions = ({navigation}) => {
//    const {navigate} = navigation;
//
//    return {
//      title      : <Text style={{alignSelf: 'center', color: "#206C97", fontWeight: 'normal'}}>TRIAL TRIAL
// TRIAL</Text>, headerRight: (<Button title="Add New Candidate" onPress={() => navigate('CandidatesForm')}/>),
// headerLeft : null } }  constructor(props) { super(props); this.tasksRef = firebase.database().ref(); const
// dataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2, }); this.state = { dataSource:
// dataSource }; }  listenForTasks(tasksRef) { tasksRef.on('value', (dataSnapshot) => { var tasks = [];
// dataSnapshot.forEach((child) => { tasks.push({ name: child.val().title, _key: child.key }); });  this.setState({
// dataSource: this.state.dataSource.cloneWithRows(tasks) }); }); }  componentDidMount() { // start listening for
// firebase updates this.listenForTasks(this.tasksRef); }  _renderItem(item) { return ( <ListItem item={item}
// onpress={console.log('clicked!')}/> ); }  render() { const {navigate} = this.props.navigation;  return ( <View>
// <Text>Candidate 1</Text> <Text>Candidate 2</Text> <Text>Candidate 3</Text> <Text>Candidate 4</Text> <ListView
// dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} enableEmptySections={true}
// style={styles.listview}/>  <Button title="Add new Candidate" onPress={() => navigate('CandidatesForm')}/> </View> )
// }   }  export default CandidatesListTrial
