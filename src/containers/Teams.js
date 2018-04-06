import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Picker
} from 'react-native';
import styles from './Home.styles'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../redux/actions';
import {connect} from 'react-redux';
import {images} from '../theme'
import InformationRow from '../components/InformationRow'
class Teams extends Component{
  constructor(props){
    super(props)
    this.state={
    country:'select',
    dataSource:[]
    }
  }
 componentDidMount(){
   this.props.fetchCountries().then(()=>{
     this.setState({
       dataSource:this.props.countries===undefined?[]:this.props.countries
     })
   })
 }

  render(){
//  alert(JSON.stringify(this.state.dataSource[1]))
    return(
      <View style={styles.teamContainer}>
        <Picker
          selectedValue={this.state.country}
          onValueChange={(itemValue, itemIndex) => this.setState({country: itemValue})}>
          <Picker.Item label="Select" value="Select" />
          {this.state.dataSource.map((item,key)=>(
              <Picker.Item label={item.name} value={item.name} />
          ))}
        </Picker>
          {this.state.dataSource.map((item,key)=>(
            item.name===this.state.country?
            <InformationRow row={item}/>
            :null
          ))}
      </View>
    )
  }

}
const mapStateToProps=state=>{
return{
countries:state.countryReducer.countrySource
}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Teams);
