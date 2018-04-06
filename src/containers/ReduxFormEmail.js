

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
  error.cpass= '';
  var ema = values.email;
  var nm = values.password;
  var name=values.ConfirmP;
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
  if(! values.ConfirmP===values.password){
    error.name= 'max 8 characters';
  }
  return error;
};

/*const submit=values=>{
 this.getVal(values)
}*/

class ReduxFormEmail extends Component{
  
  constructor(props){
   super(props);
   this.state={
     isReady: false
   };
   this.renderInput = this.renderInput.bind(this);
 }



 submit = (values, dispatch) => {
   console.log('logs',values);
  
 // this.props.fetchCountries(values)
}
 renderInput({label, type, meta: { touched, error, warning },input:{onChange,...restInput} }){
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return(
      <Item error= {hasError}>
        <Text style={styles.label}>{label}</Text>
        <Input secureTextEntry={true} onChangeText={onChange}{...restInput} style={styles.record}/>
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }
  
 
  render(){
    const { handleSubmit } = this.props;
    return(
      <Container>
        <AppHeader/>
        <Content padder>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            <Field label='Email' name="email" component={this.renderInput} />
            <Field  name="password" label="Password" component={this.renderInput} />
            <Field  name="ConfirmP" label='Confirm Password' component={this.renderInput} />
            
            
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

const ReduxForm3= reduxForm({
  form: 'ReduxForm3',
  validate
})(ReduxFormEmail)

const mapStateToProps=state=>{
  return{

  }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators,dispatch)
  }
  export default connect(mapStateToProps,mapDispatchToProps)(ReduxForm3)
