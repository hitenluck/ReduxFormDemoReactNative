import {combineReducers} from 'redux'
import * as registerReducer from './registration'
import { reducer as formReducer } from 'redux-form';
const formReducers = {
  form: formReducer
}
export default combineReducers(Object.assign({},
  registerReducer,
  formReducers
))
