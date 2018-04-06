import { StyleSheet} from 'react-native';
import {appFonts,colors} from '../theme'
export default StyleSheet.create({
  mainView:{
  height:50,
  borderBottomWidth: 1,
  borderBottomColor: colors.appColor,
  justifyContent:'center',
  flexDirection:'row'

},
headerText:{
  fontFamily: appFonts.robotoRegular,
  fontSize:20,
  margin: 16,
  color: colors.slate
},
backImageContainer:{
flex:0.5,
justifyContent: 'center',
alignItems: 'center'
},
textContainer:{
flex:3.5,
justifyContent: 'center',
alignItems: 'flex-start'
},
backImage:{
  height: 24,
  width: 24,
},

//style for information row
infoContainer:{
  flexDirection: 'row',
  margin:8,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: colors.appColor

},
rowViews:{
  flex:1,
},
flag:{
  height: 40,
  width: 40,
  borderRadius: 40/2,
},
infoText:{
  fontFamily: appFonts.robotoRegular,

}
})
