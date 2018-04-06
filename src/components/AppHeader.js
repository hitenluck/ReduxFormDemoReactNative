import React from 'react';
import {Header,Left,Right,Button,Body,Icon,Title} from 'native-base'
import styles from './Header.styles.js'
import {images} from '../theme'
 const AppHeader=({iconFlag,title})=>(
         <Header>
           <Left>
             <Button transparent>
               <Icon name='arrow-back' />
             </Button>
           </Left>
           <Body>
             <Title>Header</Title>
           </Body>
           <Right>
             <Button transparent>
               <Icon name='menu' />
             </Button>
           </Right>
         </Header>
)
export default AppHeader;
