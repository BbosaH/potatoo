/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: CandidatesForm.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-19T23:05:03+03:00
 */



/**
 * Created by Lena on 21.08.2017.
 */

import React, {Component} from 'react';
import {ScrollView,StatusBar,ToolbarAndroid} from 'react-native';
import {InputSection} from '../components';
import {connect} from 'react-redux';
import {candidateUpdate,candidateCreate,candidatesFetch,levelsFetch} from '../actions'
// import {candidatesFetch, candidatePreviewNavigate} from '../actions/CandidatesActions';

import styles from '../styles'
import { TextInput,Text,View} from '@shoutem/ui'
import { FormLabel,FormValidationMessage,Button,Icon,SearchBar} from 'react-native-elements'



const {
  mainViewStyle,
  TextFieldStyle,
  viewStyle,
  DetailsTextStyle,
  titleStyle,
  textStyle,
  inputStyle
} = styles.CandidatesFormStyle

class CandidatesForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      emailError: '',
      years : '',
      yearsError : '',
      password: '',
      passwordError: ''
    }
  }

  static navigationOptions = ({navigation}) => {
    const {navigate} = navigation;

    return {

      title      :<Text style={{alignSelf: 'center', color:'#ffffff', fontWeight: 'bold',fontSize:24}}>Create New Candidate</Text>,
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

  componentWillMount() {
    console.log("The porddoo are",this.props);
    this.props.levelsFetch();
    //this.createDataSource(this.props)
  }

  // componentWillReceiveProps(nextProps) {
  //   this.createDataSource(nextProps)
  // }

  onButtonPress() {
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
    } = this.props;

    this.props.candidateCreate({
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
    })
  }

  render() {

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
    };
    updateMail = (text) => {
      if (!validateEmail(text)) {
        this.props.candidateUpdate({prop: 'email', value: text})
      }else{
        // valid email
        this.props.candidateUpdate({prop: 'email', value: text})
      }
    }

    return (
      <View style={{backgroundColor: '#D7CCC8',flexDirection  : 'column'}}>
        <StatusBar
           backgroundColor="#3E2723"
           barStyle="light-content"
         />



        <ScrollView style={{alignSelf: 'stretch'}}>

          <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
          <TextInput
            inputStyle={inputStyle}
            placeholder="name"
            value={this.props.name}
              onChangeText={text => this.props.candidateUpdate({prop: 'name', value: text})}
            />
          <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
          <TextInput
            inputStyle={inputStyle}
            placeholder="email"
            placeholderTextColor='#000000'
            keyboardType='email-address'
            value={this.props.email}
            onChangeText={text => updateMail(text) }
            />

          <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
          <TextInput
              inputStyle={inputStyle}
              placeholder="education level"
              placeholderTextColor='#000000'
                value={this.props.education}
              onChangeText={text => this.props.candidateUpdate({prop: 'education', value: text})}
          />

            <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
            <TextInput
                inputStyle={inputStyle}
                placeholder="programing level"
                placeholderTextColor='#000000'
                value={this.props.level}
                onChangeText={text => this.props.candidateUpdate({prop: 'level', value: text})}
            />

             <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
              <TextInput
                  inputStyle={inputStyle}
                  placeholder="Years in javascript e.g 0-9"
                  keyboardType='numeric'
                  placeholderTextColor='#000000'
                  value={this.props.jsyears}
                  onChangeText={text => this.props.candidateUpdate({prop: 'jsyears', value: text})}
              />


              <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
                <TextInput
                    inputStyle={inputStyle}
                    placeholder="Years in Front end e.g 0-9"
                    keyboardType='numeric'
                    placeholderTextColor='#000000'
                    value={this.props.feyears}
                    onChangeText={text => this.props.candidateUpdate({prop: 'feyears', value: text})}
                />


                  <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
                  <TextInput
                      inputStyle={inputStyle}
                      placeholder="Github link"
                      value={this.props.ghlink}
                      onChangeText={text => this.props.candidateUpdate({prop: 'ghlink', value: text})}
                  />



                    <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
                    <TextInput
                        inputStyle={inputStyle}
                        placeholder="Candidate's skills"
                        value={this.props.skills}
                        onChangeText={text => this.props.candidateUpdate({prop: 'skills', value: text})}
                    />


                     <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
                      <TextInput
                          inputStyle={inputStyle}
                          placeholder="Projects worked on"
                          value={this.props.project}
                          onChangeText={text => this.props.candidateUpdate({prop: 'project', value: text})}
                      />


                      <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
                        <TextInput
                            inputStyle={inputStyle}
                            placeholder="Notice period"
                            value={this.props.notice}
                            onChangeText={text => this.props.candidateUpdate({prop: 'notice', value: text})}
                        />


                        <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
                          <TextInput
                              inputStyle={inputStyle}
                              placeholder="Timezone"
                              value={this.props.zone}
                              onChangeText={text => this.props.candidateUpdate({prop: 'zone', value: text})}
                          />

                          <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
                            <TextInput
                                inputStyle={inputStyle}
                                placeholder="City of residence"
                                value={this.props.based}
                                onChangeText={text => this.props.candidateUpdate({prop: 'based', value: text})}
                            />


                             <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
                              <TextInput
                                  inputStyle={inputStyle}
                                  placeholder="Current work Position"
                                  value={this.props.current}
                                  onChangeText={text => this.props.candidateUpdate({prop: 'current', value: text})}
                              />


                               <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
                                <TextInput
                                    inputStyle={inputStyle}
                                    placeholder="Salary Expectation"
                                    value={this.props.salary}
                                    onChangeText={text => this.props.candidateUpdate({prop: 'salary', value: text})}
                                />


                                 <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
                                  <TextInput
                                      inputStyle={inputStyle}
                                      placeholder="How you got to know Aurity?"
                                      value={this.props.whereaurity}
                                      onChangeText={text => this.props.candidateUpdate({prop: 'whereaurity', value: text})}
                                  />



                                   <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
                                    <TextInput
                                        inputStyle={inputStyle}
                                        placeholder="Online Courses"
                                        value={this.props.courses}
                                        onChangeText={text => this.props.candidateUpdate({prop: 'courses', value: text})}
                                    />








          <View style={{margin: 10, flex: 1}}>

            <Button
              onPress={this.onButtonPress.bind(this)}
            raised
            icon={{name: 'cached'}}
            backgroundColor="#3E2723"
            color="#ffffff"
            title='Save Candidate' />
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

export default connect(mapStateToProps, {candidateUpdate,levelsFetch,candidateCreate})(CandidatesForm);
