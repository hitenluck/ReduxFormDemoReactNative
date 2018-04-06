import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './Header.styles.js'
import {images} from '../theme'
const InformationRow=({row})=>(
  <View style={[styles.infoContainer,{backgroundColor:row.color}]}>
    <View style={styles.rowViews}>
      <Image source={images.defaultImage} style={styles.flag}/>
    </View>
    <View style={styles.rowViews}>
      <Text style={styles.infoText}>{row.name}</Text>
    </View>
    <View style={styles.rowViews}>
      <Text>{row.continent}</Text>
    </View>
    <View style={styles.rowViews}>
      <Text>{row.population}</Text>
    </View>
  </View>
)
export default InformationRow;
