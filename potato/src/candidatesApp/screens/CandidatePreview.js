/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: CandidatePreview.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-26T10:49:55+03:00
 */



/**
 * Created by Lena on 28.08.2017.
 */
import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {PreviewText, PreviewHyperlink} from '../components';
import {connect} from 'react-redux';
import {candidateUpdate,candidateRatingUpdate,candidateStatusUpdate,candidateCreate} from '../actions/CandidatesActions'
import styles from '../styles'
import { Card, ListItem, Button,Icon } from 'react-native-elements'
import StarRating from 'react-native-star-rating'



class CandidatesPreview extends Component {

  constructor(props){
    super(props);
    const { params } = this.props.navigation.state;
    this.state={
      starCount: params.candidate.rating
    }
  }
  static navigationOptions = ({navigation}) => {
    const {navigate} = navigation;

    return {

            title      :<Text style={{alignSelf: 'center', color:'#ffffff', fontWeight: 'bold',fontSize:24}}>Candidate Details</Text>,
            headerRight: (<Icon
            name='dots-three-horizontal'
            type='entypo'
            fontSize="20"
            color="#ffffff"
            onPress={() => navigate('CandidatesList')}
            />),
            headerStyle:{backgroundColor:'#4E342E',color:'#ffffff'},
            headerLeft : (<Icon
            name='chevron-thin-left'
            color="#ffffff"
            fontSize="20"
            type='entypo'
            onPress={() => navigate('CandidatesList')}
            />)
    }
  }

  onStarRatingPress(rating,candidate_uid,old_rating) {
    this.setState({
      starCount: rating
    },()=>{
      //code to be here
      this.props.candidateRatingUpdate({prop:'rating',value:rating,
        candidate_id:candidate_uid, oldRating:old_rating})
    });
  }

  render() {

    const { params } = this.props.navigation.state;
    console.log("Cmon naawe The params are",params);
    const namePlace ="full name : "
    return (

      <View style={{backgroundColor:'#D7CCC8'}}>
        <ScrollView style={{alignSelf: 'stretch'}}>
          <Card
            title={namePlace+params.candidate.name}
            image={require('../img/kenshy.png')}

            >
            <ListItem
              title={
                <Text style={{fontWeight:'bold'}}>Rate Application</Text>
              }
              subtitle={
                <View style={{width:150}}>

                  <StarRating

                    disabled={false}
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    starSize={30}
                    maxStars={5}
                    rating={this.state.starCount}
                    selectedStar={(rating) => this.onStarRatingPress(rating,params.candidate.uid,params.candidate.rating)}
                    starColor={'#4E342E'}
                    emptyStarColor={'#4E342E'}
                    style={{width:70}}

                  />
                </View>
              }
            />
            <ListItem

              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Email</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.email}</Text>
                </View>
              }
            />
            <ListItem

              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Education</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.education}</Text>
                </View>
              }
            />
            <ListItem

              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Level</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.level.value}</Text>
                </View>
              }
            />
            <ListItem

              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Javascript years</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.jsyears}</Text>
                </View>
              }
            />
            <ListItem

              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Years in Front-End</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.feyears}</Text>
                </View>
              }
            />

            <ListItem

              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Github Link</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.ghlink}</Text>
                </View>
              }
            />
            <ListItem

              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Skills</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.skills}</Text>
                </View>
              }
            />


            <ListItem

              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Project</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.project}</Text>
                </View>
              }
            />

            <ListItem

              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Notice</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.notice}</Text>
                </View>
              }
            />
            <ListItem

              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Timezone</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.zone}</Text>
                </View>
              }
            />

            <ListItem

              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Based in</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.based}</Text>
                </View>
              }
            />

            <ListItem

              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Current Position</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.current}</Text>
                </View>
              }
            />
            <ListItem

              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Salary Expectation</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.salary}</Text>
                </View>
              }
            />
            <ListItem
              onpress={text => this.props.candidateUpdate({prop: 'whereaurity', value: text})}
              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>How you got to know Aurity?</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.whereaurity}</Text>
                </View>
              }

            />
            <ListItem
              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Online courses</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.courses}</Text>
                </View>
              }

            />
            <ListItem

              title={

                <View style={{flexDirection:'row'}}>
                  <Text style={{flex:1 , fontWeight:'bold'}}>Details</Text>
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.details}</Text>
                </View>
              }

            />


            <View style={styles.CandidatePreviewStyle.footView}>
                <View style={styles.CandidatePreviewStyle.lowerButtonView}>
                  <Button title="Screening"
                          backgroundColor='#3E2723'
                          fontFamily='Lato'
                          buttonStyle={{borderRadius: 50, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          onPress={() => this.props.candidateStatusUpdate({prop: 'status', value: 'Screening',candidate_id : params.candidate.uid})}
                          color="#ffffff"/>
                </View>
                <View style={styles.CandidatePreviewStyle.lowerButtonView}>
                  <Button title="Rejected"
                          backgroundColor='#A1887F'
                          fontFamily='Lato'
                          buttonStyle={{borderRadius: 50, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          onPress={() => this.props.candidateStatusUpdate({prop: 'status', value: 'Rejected',candidate_id : params.candidate.uid})}
                          color="#ffffff"/>
                </View>
              </View>


          </Card>


        </ScrollView>
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  const {
    name,
    email,
    education,
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
  } = state.candidates

  return {
    name,
    email,
    education,
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
  }
}

export default connect(mapStateToProps, {candidateUpdate,candidateRatingUpdate,candidateStatusUpdate,candidateCreate})(CandidatesPreview);
