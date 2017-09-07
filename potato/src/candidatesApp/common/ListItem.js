/**
 * Created by Lena on 21.08.2017.
 */
import React, {Component} from 'React';
import {Text, View, TouchableWithoutFeedback} from 'react-native'


class ListItem extends Component {


  render() {
    const {name, status, level, salary} = this.props.candidate;
    const {navigate} = this.props.navigation

    return (
      <TouchableWithoutFeedback onPress={() => navigate('CandidatePreview')}>
        <View>
          <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>
              {name}, {status}, {level}, {salary}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
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


ListItem.propTypes = {
  navigation: React.PropTypes.func.isRequired
}


export {ListItem};