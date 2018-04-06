

import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../redux/actions';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import AppHeader from '../components/AppHeader'
import { Container, Item, Input,Picker, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field,reduxForm } from 'redux-form';
import styles from './Home.styles';

const validate = values => {
  const error= {};
  error.email= '';
  error.password= '';
  error.confirmP='';
  var ema = values.email;
  var password = values.password;
  var cpass=values.confirmP;
  if(values.email === undefined){
    ema = '';
  }
  if(values.password === undefined){
    password = '';
  }
   if(!values.password){
    error.password="Require"
  }
  
  if(ema.length < 8 && ema !== ''){
    error.email= 'too short';
  }
  if(!ema.includes('@') && ema !== ''){
    error.email= '@ not included';
  }
  if(values.confirmP!==values.password){
    error.confirmP= 'Password Not match';
  }
  else{
    error.confirmP= '';
  }
  return error;
};

/*const submit=values=>{
 this.getVal(values)
}*/
let myArray=[];
class ReduxFormEmail extends Component{
  
  constructor(props){
   super(props);
   this.state={
     isReady: false
   };
   this.renderInput = this.renderInput.bind(this);
   this.renderInputPassword=this.renderInputPassword.bind(this);
 }

 submit = (values, dispatch) => {
  
  AsyncStorage.getItem('emails').then((keyValue) => {
   if(keyValue!==values.email){
    console.log('logs',values);
    this.props.fetchForm3Data(values)
   }
   else{
     alert('Email Already exist')
   }
    }, (error) => {
    console.log('sorry you haveerror',error) //Display error
  });
    

    
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

  renderInputPassword({label, type, meta: { touched, error, warning },input:{onChange,...restInput} }){
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
        <AppHeader isBack="true" title="Third Form" onPress={()=>{Actions.pop()}}/>
        <Content padder>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            <Field label='Email' name="email" component={this.renderInput} />
            <Field  name="password" label="Password" component={this.renderInputPassword} />
            <Field  name="confirmP" label='Confirm Password' component={this.renderInputPassword} />
            
            
          <Button block primary
              onPress={handleSubmit(this.submit)}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
              <Text>
              NEXT
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
