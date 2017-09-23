/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: CandidatePreview.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-19T23:35:20+03:00
 */



/**
 * Created by Lena on 28.08.2017.
 */
import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {PreviewText, PreviewHyperlink} from '../components';
import {connect} from 'react-redux';
import {candidateUpdate,candidateStatusUpdate,candidateCreate} from '../actions/CandidatesActions'
import styles from '../styles'
import { Card, ListItem, Button,Icon } from 'react-native-elements'



class CandidatesPreview extends Component {
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

  render() {

    const { params } = this.props.navigation.state;
    console.log("Cmon naawe The params are",params);

    return (

      <View style={{backgroundColor:'#D7CCC8'}}>
        <ScrollView style={{alignSelf: 'stretch'}}>
          <Card
            title={params.candidate.name}
            image={require('../img/african.png')}

            >
            <ListItem
              title={
              <View style={{flexDirection:'row'}}>
                <Text style={{flex:1, fontWeight:'bold'}}>Name</Text>
                <Text style={{flex:1, fontWeight:'bold'}}>{params.candidate.name}</Text>
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
                  <Text style={{flex:1 , fontWeight:'bold' }}>{params.candidate.level}</Text>
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

export default connect(mapStateToProps, {candidateUpdate, candidateStatusUpdate,candidateCreate})(CandidatesPreview);
