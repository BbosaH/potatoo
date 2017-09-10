/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: CandidatePreview.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-10T08:40:02+03:00
 */



/**
 * Created by Lena on 28.08.2017.
 */
import React, {Component} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {PreviewText, PreviewHyperlink} from '../components';
import {connect} from 'react-redux';
import {candidateUpdate, candidateCreate} from '../actions'
import styles from '../styles'



class CandidatesPreview extends Component {
  static navigationOptions = ({navigation}) => {
    const {navigate} = navigation;

    return {
      title : <Text style={styles.CandidatePreviewStyle.headerTitleTextStyle}>Preview Existing
      Candidate</Text>,
      headerRight: (<Button title="Save/Add"
                            onPress={() => navigate('CandidatesList')}/>),
      headerLeft : (<Button title="Back"
                            onPress={() => navigate('CandidatesList')}/>)
    }
  }

  render() {

    const { params } = this.props.navigation.state;
    console.log("The params are",params);

    return (

      <View>
        <ScrollView style={{alignSelf: 'stretch'}}>
          <Text style={styles.CandidatePreviewStyle.titleTextStyle}>
            Candidates details
          </Text>
          <PreviewText title="Surname and Name"
                       value={params.candidate.name}
          />
          <PreviewText title="Email"
                       placeholder="example@mail.com"
                       value={params.candidate.email}
                       onChangeText={text => this.props.candidateUpdate({prop: 'email', value: text})}
          />
          <PreviewText title="Education"
                       placeholder="Education"
                       value={params.candidate.education}
                       onChangeText={text => this.props.candidateUpdate({prop: 'education', value: text})}
          />
          <PreviewText title="Level"
                       placeholder="Junior"
                       value={params.candidate.level}
                       onChangeText={text => this.props.candidateUpdate({prop: 'level', value: text})}
          />
          <PreviewText title="Years in JS"
                       placeholder="0-1"
                       value={params.candidate.jsyears}
                       onChangeText={text => this.props.candidateUpdate({prop: 'jsyears', value: text})}
          />
          <PreviewText title="Years in Front-End"
                       placeholder="0-1"
                       value={params.candidate.feyears}
                       onChangeText={text => this.props.candidateUpdate({prop: 'feyears', value: text})}
          />
          <PreviewHyperlink title="Github Link"
                       value="https://github.com"
                       onChangeText={text => this.props.candidateUpdate({prop: 'ghlink', value: text})}
          />
          <PreviewText title="Skills"
                       placeholder="Candidate's skills"
                       value={params.candidate.skills}
                       onChangeText={text => this.props.candidateUpdate({prop: 'skills', value: text})}
          />
          <PreviewText title="Project Description"
                       placeholder="Description"
                       value={params.candidate.project}
                       onChangeText={text => this.props.candidateUpdate({prop: 'project', value: text})}
          />
          <PreviewText title="Notice"
                       placeholder="2 weeks"
                       value={params.candidate.notice}
                       onChangeText={text => this.props.candidateUpdate({prop: 'notice', value: text})}
          />
          <PreviewText title="Timezone"
                       placeholder="UTC"
                       value={params.candidate.zone}
                       onChangeText={text => this.props.candidateUpdate({prop: 'zone', value: text})}
          />
          <PreviewText title="Based in"
                       placeholder="San Francisco"
                       value={params.candidate.based}
                       onChangeText={text => this.props.candidateUpdate({prop: 'based', value: text})}
          />
          <PreviewText title="Current Position"
                       placeholder="Programmer"
                       value={params.candidate.current}
                       onChangeText={text => this.props.candidateUpdate({prop: 'current', value: text})}
          />
          <PreviewText title="Salary Expectation"
                       placeholder="10,000.00 EUR"
                       value={params.candidate.salary}
                       onChangeText={text => this.props.candidateUpdate({prop: 'salary', value: text})}
          />
          <PreviewText title="How got to know Aurity?"
                       placeholder="Google"
                       value={params.candidate.whereaurity}
                       onChangeText={text => this.props.candidateUpdate({prop: 'whereaurity', value: text})}
          />
          <PreviewText title="Online Courses"
                       placeholder="udemy"
                       value={params.candidate.courses}
                       onChangeText={text => this.props.candidateUpdate({prop: 'courses', value: text})}
          />
          <PreviewText title="Details"
                       placeholder="Details"
                       value={params.candidate.details}
                       onChangeText={text => this.props.candidateUpdate({prop: 'details', value: text})}
          />


        <View style={styles.CandidatePreviewStyle.footView}>
            <View style={styles.CandidatePreviewStyle.lowerButtonView}>
              <Button title="Screening"
                      onPress={() => this.props.candidateUpdate({prop: 'status', value: 'Screening'})}
                      color="#579c2b"/>
            </View>
            <View style={styles.CandidatePreviewStyle.lowerButtonView}>
              <Button title="Rejected"
                      onPress={() => this.props.candidateUpdate({prop: 'status', value: 'Rejected'})}
                      color="#9c2927"/>
            </View>
          </View>
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

export default connect(mapStateToProps, {candidateUpdate, candidateCreate})(CandidatesPreview);