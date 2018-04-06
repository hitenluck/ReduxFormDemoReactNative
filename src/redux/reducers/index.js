import {combineReducers} from 'redux'
import * as contriesReducer from './countryReducer'
import { reducer as formReducer } from 'redux-form';
const formReducers = {
  form: formReducer
}
export default combineReducers(Object.assign({},
  contriesReducer,
  formReducers
))
