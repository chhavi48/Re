import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const Task=(props)=>{
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
         <TouchableOpacity style={styles.square}>
          
         </TouchableOpacity>
      </View>
      <Text>{props.text}</Text>
    </View>
  )
}
export default Task;