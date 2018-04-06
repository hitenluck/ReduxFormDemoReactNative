


import React, { Component } from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';
import AppHeader from '../components/AppHeader'
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field,reduxForm } from 'redux-form';
//import styles from './Home.styles';
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../redux/actions';
import {connect} from 'react-redux';
import {submit} from 'redux-form'
class DispatchButton extends Component{
  render(){
    return(
      <TouchableOpacity
        onPress={()=>{this.props.fetchCountries('ReduxForm')}}>
        <Text>
        Submit
       </Text>
       </TouchableOpacity>
    )
  }
}
const mapStateToProps=state=>{
  return{

  }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators,dispatch)
  }
  export default connect(mapStateToProps,mapDispatchToProps)(DispatchButton)
