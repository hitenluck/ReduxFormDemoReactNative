import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Home from '../containers'
import ViewData from '../containers/ViewData'
import LoadImage from '../containers/LoadImage'
import ReduxFormEmail from '../containers/ReduxFormEmail';
class AppRoute  extends Component{
  _renderScreen(){
    return(
      <Scene
        key="root"
        hideNavBar="hideNavBar"
        hideTabBar="hideTabBar"
        panHandlers={null}>
        <Scene initial  key="Home" component={Home} />
        <Scene  key="LoadImage" component={LoadImage} />
        <Scene  key="ReduxFormEmail" component={ReduxFormEmail} />
        <Scene   key="ViewData" component={ViewData} />
        
      </Scene>
    )
  }
  render(){
    return(
      <Router>
      {this._renderScreen()}
      
      </Router>

    )
  }
}
export default AppRoute;
