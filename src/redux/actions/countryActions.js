import * as constants from './constants'
import Api from '../../lib/api'
import {Actions} from 'react-native-router-flux';
export function startRequest(){
  return{
    type: constants.START_REQUEST
  };
}
export function setForm1Data(email){
  console.log('called');
  return{
    type: constants.GET_FORM1_DATA,
    email,
  };
}

export function fetchCountries(data){
  console.log('my form data',data)

  return (dispatch,getState) => {
      dispatch(setForm1Data(data.email))
      Actions.LoadImage()
  }
}
