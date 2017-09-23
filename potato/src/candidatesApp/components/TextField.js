/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-18T11:11:19+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: TextField.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-18T20:07:19+03:00
 */



 import React, {Component} from 'react'
 import {View, Text, TextInput} from 'react-native'

 export default class TextField extends Component {
   error() {
     if (this.props.error) {
       return <Text>{this.props.error}</Text>
     }
     return null
   }

   render() {
     return (
       <View>
         <TextInput
           placeholder="henry bbosa"
         />
         {this.error()}
       </View>
     )
   }
 }
