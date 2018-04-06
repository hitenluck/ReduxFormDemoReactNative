import * as constants from './constants'

import {Actions} from 'react-native-router-flux';
export function startRequest(){
  return{
    type: constants.START_REQUEST
  };
}

export function setForm1Data(fname,lname,city,addr,country,state){
  console.log('called');
  return{
    type: constants.GET_FORM1_DATA,
    fname,
    lname,
    city,
    addr,
    country,
    state
  };
}
export function setForm2Data(imgPath){
  console.log('called');
  return{
    type: constants.GET_FORM2_DATA,
    imgPath,
  };
}
export function setForm3Data(email,password){
  console.log('called');
  return{
    type: constants.GET_FORM3_DATA,
    email,
    password,
  };
}

export function fetchCountries(data){
  console.log('my form data',data)

  return (dispatch,getState) => {
      dispatch(setForm1Data(data.fname,data.lname,data.city,data.addr,data.selectCountry,data.state))
      Actions.LoadImage()
  }
}

export function fetchForm2Data(data){
  console.log('my form data',data)

  return (dispatch,getState) => {
      dispatch(setForm2Data(data))
      Actions.ReduxFormEmail()
  }
}

export function fetchForm3Data(data){
  console.log('my form data',data)
  return (dispatch,getState) => {
      dispatch(setForm3Data(data.email,data.password))
      Actions.ViewData()
  
  }  
}
