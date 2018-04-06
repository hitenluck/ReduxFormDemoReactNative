import React,{Component} from 'react';
import {Header,Left,Right,Button,Body,Icon,Title} from 'native-base'

import {images} from '../theme'
 class AppHeader extends Component{
   render(){
     return(
      <Header>
      <Left>
        <Button onPress={this.props.onPress} transparent>
           {this.props.isBack==='true'?
           <Icon name='arrow-back' />
           :
           null
          }
        </Button>
      </Left>
      <Body>
        <Title>{this.props.title}</Title>
      </Body>
      <Right>
        <Button transparent>
          
        </Button>
      </Right>
    </Header>
     )
   }
  }
export default AppHeader;
