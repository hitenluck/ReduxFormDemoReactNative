import { StyleSheet} from 'react-native';
import {appFonts,colors} from '../theme'
export default StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
  },
  record:{
    fontSize:14,
    fontWeight:'bold',
    width:220,
    borderWidth:1,
    borderColor:'blue',
    margin:8,
  },
  label:{
    width:80,
    fontSize:14,
  },
  infoText:{
    fontSize:14,
    fontWeight:'bold'
  },
  uploadImage:{
    height:80,
    width:80,
    borderRadius:80/2,
    borderWidth:1,
  },

  containerPlatform:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  platformText:{
    fontFamily: appFonts.robotoRegular,
    fontSize: 28
  },
  teamContainer:{
    flex:1,
  },
  linkContainer:{
    borderWidth: 1,
    borderRadius: 4,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:colors.appColor,
    margin: 8,
    padding: 10,
  },
  linkText:{
    fontFamily: appFonts.robotoRegular,
    margin: 16,
  },

})
