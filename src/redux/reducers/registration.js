import createReducer from '../../lib/createReducer'
import * as constants from '../actions/constants'

const intialState={
  fname:null,
  lname:null,
  addr:null,
  city:null,
  country:null,
  state:null,
  imgPath:null,
  email:null,
  password:null,

};

export const userRegistrationReducer=createReducer(intialState,{
  [constants.START_REQUEST](state,action){
    console.log('hello dear')
},

 [constants.GET_FORM1_DATA](state,action){
  return Object.assign({},state,
    {
      fname:action.fname,
      lname:action.lname,
      city:action.city,
      addr:action.addr,
      country:action.country,
      state:action.state,
    }
    )
},
[constants.GET_FORM2_DATA](state,action){
  return Object.assign({},state,
    {
      imgPath:action.imgPath,
      
    }
    )
 },

[constants.GET_FORM3_DATA](state,action){
   return Object.assign({},state,{email:action.email,password:action.password})
  }
});
