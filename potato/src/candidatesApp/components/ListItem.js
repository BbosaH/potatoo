/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-12T15:43:06+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: ListItem.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-15T11:31:26+03:00
 */



/**
 * Created by Lena on 21.08.2017.
 */
import React, {Component} from 'React';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import { List, ListItem } from 'react-native-elements'



class ListRow extends Component {
  // onRowPress() {
  //   this.props.navigation.navigate('CandidatePreview')
  //


  render() {

    const {name, status, level, salary} = this.props.candidate;

    onCPress=(candidate)=>{

          console.log("The candidate=>",candidate);
          this.props.func(candidate);

    }


    return (
      <ListItem onPress={()=>{onCPress(this.props.candidate)}}
        roundAvatar
        title={name}
        avatar={require('../img/pretty.png')}
        subtitle={level+' '+status}

        >

      </ListItem>
    );
  }
}

const styles = {
  titleStyle    : {
    fontSize   : 18,
    paddingLeft: 15
  },
  containerStyle: {
    flex           : 0.5,
    elevation      : 10,
    padding        : 5,
    backgroundColor: '#fff',
    shadowColor    : '#000',
    shadowOffset   : {width: 5, height: 10},
    shadowOpacity  : 0.5,
    flexDirection  : 'row',
    alignItems     : 'center',
    justifyContent : 'center',
    position       : 'relative',
  }
}

export default ListRow;
