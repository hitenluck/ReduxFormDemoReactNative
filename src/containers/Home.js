

import React, { Component } from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../redux/actions';
import {connect} from 'react-redux';

import AppHeader from '../components/AppHeader'
import { Container, Item, Input,Picker, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field,reduxForm } from 'redux-form';
import styles from './Home.styles';
import DispatchButton from '../components/DispatchButton'
const validate = values => {
  const error= {};
  error.email= '';
  error.lname= '';
  error.fname='';
  var ema = values.email;
  var nm = values.lname;
  var name=values.fname;
  if(values.email === undefined){
    ema = '';
  }
  if(values.fname === undefined){
    name = '';
  }
   if(!values.fname){
    error.fname="Require"
  }
  
  if(ema.length < 8 && ema !== ''){
    error.email= 'too short';
  }
  if(!ema.includes('@') && ema !== ''){
    error.email= '@ not included';
  }
  /*if(nm.length > 8){
    error.name= 'max 8 characters';
  }*/
  return error;
};

/*const submit=values=>{
 this.getVal(values)
}*/

class Home extends Component{
  
  constructor(props){
   super(props);
   this.state={
     isReady: false
   };
   this.renderInput = this.renderInput.bind(this);
   this.renderVehicleSelect=this.renderVehicleSelect.bind(this);
 }



 submit = (values, dispatch) => {
   console.log('logs',values);
  
  this.props.fetchCountries(values)
}
 renderInput({label, type, meta: { touched, error, warning },input:{onChange,...restInput} }){
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return(
      <Item error= {hasError}>
        <Text style={styles.label}>{label}</Text>
        <Input onChangeText={onChange}{...restInput} style={styles.record}/>
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }
  
  renderVehicleSelect({input: { onChange, value, ...inputProps }, children, ...pickerProps }){
   return(
      <Picker
    selectedValue={ value }
    onValueChange={ value => onChange(value) }
    { ...inputProps }
    { ...pickerProps }
  >
    { children }
  </Picker>
   )
    }

  render(){
    const { handleSubmit } = this.props;
    return(
      <Container>
        <AppHeader/>
        <Content padder>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            <Field label='Email' name="email" component={this.renderInput} />
            <Field name="fname" label="First Name" component={this.renderInput} />
            <Field name="lname" label='Last Name' component={this.renderInput} />
            <Field name="addr" label='Address' component={this.renderInput} />
            <Field label="Country" name="selectCountry" mode="dropdown" 
            component={this.renderVehicleSelect}>
              <Item label="India" value="India" />
              <Item label="England" value="England" />
              <Item label="Australia" value="Australia" />
              <Item label="Bangladesh" value="Bangladesh" />
          </Field>
          <Field name="city" label="City" component={this.renderInput} />
          <Field name="state" label="State" component={this.renderInput} />
          <Button block primary
              onPress={handleSubmit(this.submit)}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
              <Text>
              Submit
            </Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const ReduxForm1= reduxForm({
  form: 'ReduxForm1',
  validate
})(Home)

const mapStateToProps=state=>{
  return{

  }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators,dispatch)
  }
  export default connect(mapStateToProps,mapDispatchToProps)(ReduxForm1)
