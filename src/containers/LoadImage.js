

import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../redux/actions';
import {connect} from 'react-redux';
import {images} from '../theme'
import AppHeader from '../components/AppHeader'
import { Container, Item, Input,Picker, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field,reduxForm } from 'redux-form';
import styles from './Home.styles';
import { Actions } from 'react-native-router-flux';

const validate = values => {
  const error= {};
  error.email= '';
  var ema = values.email;
  if(values.email === undefined){
    ema = '';
  }
  
  if(ema.length < 8 && ema !== ''){
    error.email= 'too short';
  }
  if(!ema.includes('@') && ema !== ''){
    error.email= '@ not included';
  }

  return error;
};

/*const submit=values=>{
 this.getVal(values)
}*/

class LoadImage extends Component{
  
  constructor(props){
   super(props);
   this.state={
     isReady: false,
     avatarSource:null,
   };
 }



handleOnDrop(){
   
    ImagePicker.openPicker({
      compressImageMaxWidth:300,
      compressImageMaxHeight:100,
      compressImageQuality:0.80,
    }).then(response => {
      this.setState({
        avatarSource:response.path})
    
    });
    
}
_gotoNextPage(){
  if(this.state.avatarSource===null){
    alert('upload the image')
  }
  else{
    this.props.fetchForm2Data(this.state.avatarSource)
  }
}

render(){
    return(
      <Container>
        <AppHeader isBack="true" title="Image Upload" onPress={()=>{Actions.pop()}}/>
        <Content padder>
        <Text>Upload Image</Text>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}  onPress={()=>{this.handleOnDrop()}}>
            {this.state.avatarSource===null?
                <Image style={styles.uploadImage} source={images.backImage}/>
                :
                 <Image style={styles.uploadImage} source={{uri:this.state.avatarSource}}/>
            }
        </TouchableOpacity>
        <Button block primary onPress={()=>{this._gotoNextPage()}}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
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

  }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators,dispatch)
  }
  export default connect(mapStateToProps,mapDispatchToProps)(LoadImage)
