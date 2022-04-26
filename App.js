import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Headers from './src/components/headers';
import Category from './src/components/category';

export default function App() {
  return (
    <View style={styles.headers}>
        <Headers/>
        <Category/>
    </View>
      
  );
}

const styles = StyleSheet.create({
  
  headers:{
   paddingTop: 30,
   padding: 24,
   backgroundColor:'#000'
   
  }
  
});
