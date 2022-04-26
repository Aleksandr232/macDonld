import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Headers from './src/components/headers';
import Category from './src/components/category';
import Popular from './src/components/popular';

export default function App() {
  return (
    <View style={styles.headers}>
        <Headers/>
        <Category/>
        <Popular/>
    </View>
      
  );
}

const styles = StyleSheet.create({
  
  headers:{
   paddingTop: 40,
   padding: 24,
   backgroundColor:'#000'
   
  }
  
});
