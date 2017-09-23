/**
 * @Author: Henry Bbosa <magicwand>
 * @Date:   2017-09-18T09:16:36+03:00
 * @Email:  bbosa.henry1@gmail.com
 * @Project: potato
 * @Filename: validation.js
 * @Last modified by:   magicwand
 * @Last modified time: 2017-09-18T13:59:22+03:00
 */

  const validation_rules = {
   email: {
     presence: {
       message: '^Please enter an email address'
     },
     format: {
       pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
       message: '^Please enter a valid email address'
     }
   },

   password: {
     presence: {
       message: '^Please enter a password'
     },
     length: {
       minimum: 5,
       message: '^Your password must be at least 5 characters'
     }
   }
 }

 export default validation_rules;
