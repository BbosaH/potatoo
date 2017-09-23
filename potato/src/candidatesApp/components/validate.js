/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-18T10:57:10+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: validator.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-18T10:58:03+03:00
 */



 import validation_rules from './validation_rules.js'

 export default function validate(fieldName, value) {
   // Validate.js validates your values as an object
   // e.g. var form = {email: 'email@example.com'}
   // Line 8-9 creates an object based on the field name and field value
   var formValues = {}
   formValues[fieldName] = value

   // Line 13-14 creates an temporary form with the validation fields
   // e.g. var formFields = {
   //                        email: {
   //                         presence: {
   //                          message: 'Email is blank'
   //                         }
   //                       }
   var formFields = {}
   formFields[fieldName] = validation[field]


   // The formValues and validated against the formFields
   // the variable result hold the error messages of the field
   const result = validatejs(formValues, formFields)

   // If there is an error message, return it!
   if (result) {
     // Return only the field error message if there are multiple
     return result[field][0]
   }

   return null
 }
