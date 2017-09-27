/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-06T15:14:07+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: CandidatesForm.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-27T23:29:56+03:00
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
import { TextInput,Text,View,DropDownMenu,Image} from '@shoutem/ui'
import { FormLabel,FormValidationMessage,Button,Icon,SearchBar} from 'react-native-elements'
import {NUM_REG_EXP,EMAIL_REG_EXP,TIMEZONE_REG_EXP} from '../settings/settings'




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
      email: this.props.email,
      emailError: '',
      jsyears : '',
      numError : '',
      feyears : '',
      timezone:'',
      timezoneError:'',
      emailSpaceHeight: 5,
      jsyearsSpaceHeight: 5,
      feyearsSpaceHeight: 5,
      timezoneSpaceHeight:5,
      levels: [
        { title: 'programming Level : Novince', value: 'Novince' },
        { title: 'Junior', value: 'Junior' },
        { title: 'Intermediate ', value: 'Intermediate' },
        { title: 'Senior', value: 'Senior' },
      ],
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
      rating
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
      rating
    })
  }

  updateMail (text) {
    this.setState({
        email:text
    });
    if (validateReg(text,EMAIL_REG_EXP)) {
      this.setState({
          emailError:"",
          emailSpaceHeight:5
      }); //deliberately coded like this..
      this.props.candidateUpdate({prop: 'email', value: text})
    }else{

      this.setState({
          emailError:"Invalid email",
          emailSpaceHeight:25
      });

      console.log("Invalid email")

    }
  }

  updatejsYears(text){

    this.setState({
        jsyears:text
    });
    if (validateReg(text,NUM_REG_EXP)) {
      this.setState({
          numError:"",
          jsyearsSpaceHeight:5
      });
      this.props.candidateUpdate({prop: 'jsyears', value: text})
    }else{

      this.setState({
          numError:"Input must be a number",
          jsyearsSpaceHeight:25
      });

    }

  }

  updatefeYears(text){

    this.setState({
        feyears:text
    });
    if (validateReg(text,NUM_REG_EXP)) {
      this.setState({
          numError:"",
          feyearsSpaceHeight:5
      });
      this.props.candidateUpdate({prop: 'feyears', value: text})
    }else{

      this.setState({
          numError:"Input must be a number",
          feyearsSpaceHeight:25
      });

    }

  }

  updatetimeZone(text){

    this.setState({
        timezone:text
    });
    if (validateReg(text,TIMEZONE_REG_EXP)) {
      this.setState({
          timezoneError:"",
          timezoneSpaceHeight:5
      });
      this.props.candidateUpdate({prop: 'timezone', value: text})
    }else{

      this.setState({
          timezoneError:"Invalid timezone format",
          timezoneSpaceHeight:25
      });

    }

  }

  updateLevel(text){

    this.setState({
        selectedLevel:text
    });
    this.props.candidateUpdate({prop: 'level', value: text})


  }


  render() {

    validateReg = (text,reg_exp) => {
      //  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return reg_exp.test(text);
    };
    validateNo = (number) => {
        var re =/^\\d+$/;
          return re.test(number);
    };

    return (
      <View style={{backgroundColor: '#D7CCC8',flexDirection  : 'column'}}>
        <StatusBar
           backgroundColor="#3E2723"
           barStyle="light-content"
         />



        <ScrollView style={{alignSelf: 'stretch'}}>

          <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
           <View style={{flexDirection:"row"}}>
             <View style={{flex:1}}>
               <View style={{marginTop:50,marginLeft:20}}>
               <Icon
                  raised
                  name='camera'
                  type='font-awesome'
                  color='#4E342E'
                  onPress={() => console.log('hello')} />
              </View>
            </View>
             <View style={{flex:2}}>
                <Image
                  styleName="medium-avatar"
                  source={require('../img/joe.png')}
                />
             </View>

          </View>



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
            value={this.state.email}
            onChangeText={text =>this.updateMail(text) }
            />

          <View style={{height:this.state.emailSpaceHeight,backgroundColor:"#D7CCC8"}}>
            <Text style={{color:'#4E342E',fontWeight:"bold",paddingLeft:20}}>{this.state.emailError}</Text>
          </View>



          <TextInput
              inputStyle={inputStyle}
              placeholder="education level"
              placeholderTextColor='#000000'
                value={this.props.education}
              onChangeText={text => this.props.candidateUpdate({prop: 'education', value: text})}
          />

            <View style={{height:5,backgroundColor:"#D7CCC8"}}/>

              <DropDownMenu
              styleName="horizontal"
              options={this.state.levels}
              selectedOption={this.state.selectedLevel ? this.state.selectedLevel : this.state.levels[0]}
              onOptionSelected={(level) => this.updateLevel(level)}
              titleProperty="title"
              valueProperty="value"
             />

             <View style={{height:5,backgroundColor:"#D7CCC8"}}/>
              <TextInput
                  inputStyle={inputStyle}
                  placeholder="Years in javascript e.g 0-9"
                  keyboardType='numeric'
                  placeholderTextColor='#000000'
                  value={this.state.jsyears}
                  onChangeText={text => this.updatejsYears(text)}
              />
                <View style={{height:this.state.jsyearsSpaceHeight,backgroundColor:"#D7CCC8"}}>
                    <Text style={{color:'#4E342E',fontWeight:"bold",paddingLeft:20}}>{this.state.numError}</Text>
                  </View>


                <TextInput
                    inputStyle={inputStyle}
                    placeholder="Years in Front end e.g 0-9"
                    keyboardType='numeric'
                    placeholderTextColor='#000000'
                    value={this.state.feyears}
                    onChangeText={text => this.updatefeYears(text)}
                />
                <View style={{height:this.state.feyearsSpaceHeight,backgroundColor:"#D7CCC8"}}>
                    <Text style={{color:'#4E342E',fontWeight:"bold",paddingLeft:20}}>{this.state.numError}</Text>
                  </View>

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
                              placeholder="Timezone e.g +05:30"
                              value={this.state.timezone}
                              onChangeText={text => this.updatetimeZone(text)}
                          />

                        <View style={{height:this.state.timezoneSpaceHeight,backgroundColor:"#D7CCC8"}}>
                              <Text style={{color:'#4E342E',fontWeight:"bold",paddingLeft:20}}>{this.state.timezoneError}</Text>
                          </View>


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
            disabled={
              this.state.emailError.length>0 |
              this.state.numError.length>0 |
              this.state.timezoneError.length>0 |
              !this.state.email |
              !this.props.name |
              !this.state.jsyears |
              !this.state.feyears |
              !this.state.timezone |
              !this.props.based |
              !this.props.skills |
              !this.props.whereaurity|
              !this.props.salary|
              !this.props.current|
              !this.props.notice|
              !this.props.project
             }
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
    rating
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
    rating
  }
}

export default connect(mapStateToProps, {candidateUpdate,levelsFetch,candidateCreate})(CandidatesForm);
