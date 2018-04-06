
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

const validate = values => {
  const error= {};
  
  error.lname= '';
  error.fname='';
  error:addr='';
  error:state='';
  error:city='';
  error.state='';
  var fname  = values.fname;
  var lname=values.lname;
  var addr=values.addr;
  var name=values.fname;
  var Country=values.selectCountry;
  var city=values.city;
  var state=values.state;

  if(values.fname === undefined){
    fname = '';
  }
  if(values.addr === undefined){
    addr = '';
  }
  if(values.Country === 'Select'){
    Country = '';
  }

   if(!values.fname){
    error.fname="*"
  }
  if(!values.addr){
    error.addr="*"
  }
  if(!values.state){
    error.state="*"
  }
  if(!values.city){
    error.city="*"
  }
  if(values.Country===''){
    error.Country="*"
  }
  
  
  if(fname.length < 4 && fname !== ''){
    error.fname= 'too short';
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
   this.renderCountry=this.renderCountry.bind(this);
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
  
  renderCountry({input: { onChange, value, ...inputProps }, children, ...pickerProps }){
   //alert(value)
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
        <AppHeader title="Home" isBack='false'/>
        <Content padder>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            <Field name="fname" label="First Name" component={this.renderInput} />
            <Field name="lname" label='Last Name' component={this.renderInput} />
            <Field name="addr" label='Address' component={this.renderInput} />
            <Field label="Country"  name="selectCountry" mode="dropdown" 
            component={this.renderCountry}>
            <Item disabled label="Select" value="Select" />
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
