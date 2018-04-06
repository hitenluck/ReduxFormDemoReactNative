import React,{Component} from 'react';
import {
  Image,
  View,
  AsyncStorage,
  ToastAndroid
} from 'react-native';
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../redux/actions';
import {connect} from 'react-redux';
import AppHeader from '../components/AppHeader'
import {Center,Container,Left,Right,Item, Body, Content, Title, Button, Text } from 'native-base';
import styles from './Home.styles';
import { Actions } from 'react-native-router-flux';

class ViewData extends Component{
   
    _onsubmitData(){
        //checking for email duplication
            try {
            AsyncStorage.setItem('emails', this.props.email);
            } catch (error) {
            // Error saving data
            }
            Actions.Home({type:'reset'})
            ToastAndroid.show('Registration done Sucessfully.', ToastAndroid.SHORT);
        }
    
    render(){
       // alert(this.props.imgPath)
        return(
            <Container>
                <AppHeader isBack="true" title="View Data" onPress={()=>{Actions.pop()}} />
                <Content>
                <Body>
                <Image style={styles.uploadImage} source={{uri:this.props.imgPath}}/>
                <Text>{this.props.fname} {this.props.lname}</Text>
            </Body>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.label}>Your Email:</Text>
                <Text style={styles.infoText}>{this.props.email}</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.label}>Your Address:</Text>
                <Text style={styles.infoText}>{this.props.address}</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.label}>Your City:</Text>
                <Text style={styles.infoText}>{this.props.city}</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.label}>Your State:</Text>
                <Text style={styles.infoText}>{this.props.state}</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.label}>Your Country:</Text>
                <Text style={styles.infoText}>{this.props.country}</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.label}>Your Password:</Text>
                <Text style={styles.infoText}>{this.props.password}</Text>
                </View>

                <Button block primary
                onPress={()=>{this._onsubmitData()}}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                <Text>
                Submit
                </Text>
            </Button>
                </Content>
            </Container>
        )
  }   
}
const mapStateToProps=state=>{
    return{
        imgPath:state.userRegistrationReducer.imgPath,
        fname:state.userRegistrationReducer.fname,
        lname:state.userRegistrationReducer.lname,
        email:state.userRegistrationReducer.email,
        country:state.userRegistrationReducer.country,
        state:state.userRegistrationReducer.state,
        city:state.userRegistrationReducer.city,
        address:state.userRegistrationReducer.addr,
        password:state.userRegistrationReducer.password,
        
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators,dispatch)
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ViewData);
