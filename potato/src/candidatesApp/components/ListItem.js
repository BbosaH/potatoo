/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-12T15:43:06+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: ListItem.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-26T11:38:36+03:00
 */



/**
 * Created by Lena on 21.08.2017.
 */
import React, {Component} from 'React';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import { List, ListItem,Badge } from 'react-native-elements';
import StarRating from 'react-native-star-rating';



class ListRow extends Component {
  // onRowPress() {
  //   this.props.navigation.navigate('CandidatePreview')
  //
  constructor(props){
    super(props);
    this.state={
      starCount: 3.5
    }
  }

  renderStatus(status){

    switch(status){
      case 'Screening':

       return (
         <Badge containerStyle={{ backgroundColor: '#424242'}}>
            <Text style={{flex:1,fontWeight:'normal',color:"#ffffff"}}>{status}</Text>
         </Badge>
       )

      break;
      case 'New':
        return (
          <Badge containerStyle={{ backgroundColor: '#311B92'}}>
             <Text style={{flex:1,fontWeight:'normal',color:"#ffffff"}}>{status}</Text>
          </Badge>
        )

      break;
      case 'Rejected':
        return (
          <Badge containerStyle={{ backgroundColor: '#4E342E'}}>
             <Text style={{flex:1,fontWeight:'normal',color:"#ffffff"}}>{status}</Text>
          </Badge>
        )

      break;
      default:
        return <Text style={{flex:1,fontWeight:'bold',color:"#00C853",marginLeft:10}}></Text>
      break;
    }

  }


  render() {

    const {name, status, level, salary,rating} = this.props.candidate;

    onCPress=(candidate)=>{

          console.log("The candidate=>",candidate);
          this.props.func(candidate);

    }


    return (
      <ListItem onPress={()=>{onCPress(this.props.candidate)}}
        roundAvatar
        title={
          <View style={{flexDirection:'row'}}>
          <Text style={{flex:1,fontWeight:'bold',color:"#4E342E",marginLeft:10}}>{name}</Text>
          {this.renderStatus(status)}
          </View>
        }
        avatar={require('../img/pretty.png')}
        subtitle={

          <View style={{width:100,marginLeft:10}}>
            <Text style={{fontWeight:'bold'}}>{level.value}</Text>
            <StarRating

              disabled={false}
              emptyStar={'ios-star-outline'}
              fullStar={'ios-star'}
              halfStar={'ios-star-half'}
              iconSet={'Ionicons'}
              starSize={20}
              maxStars={5}
              rating={rating}
              starColor={'#4E342E'}
              emptyStarColor={'#4E342E'}
              style={{width:70}}

            />
          </View>

      }

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
