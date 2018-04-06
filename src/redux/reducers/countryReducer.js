import createReducer from '../../lib/createReducer'
import * as constants from '../actions/constants'

const intialState={
  email:null,

};

export const countryReducer=createReducer(intialState,{
  [constants.START_REQUEST](state,action){
    console.log('hello dear')
 return{
   ...state
 }
},

 [constants.GET_FORM1_DATA](state,action){
 return Object.assign({},state,{email:action.email})
}

});
