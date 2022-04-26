import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import  {categoris}  from './categoris';
import { COLORS } from './colors';

const Category=()=>{
    [active, setActive]=useState(null)
    return(
        <View style={{paddingTop: 100}}> 
            <Text style={{fontWeight:'bold', fontSize:30, color:'white'}}>Hey,</Text>
            <Text style={{fontWeight:'300', fontSize: 20, color:'white'}}>what's up?</Text>
           
        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', top:20}}>
        {categoris.map((cat, idx)=>(
            <View style={{borderRadius:10, width:"20%", backgroundColor: active === idx ? COLORS.RED : COLORS.BLACK}}>
            <TouchableHighlight underlayColor={COLORS.RED} onPress={() => setActive(idx)}>
                <View style={{alignItems:'center'}}>
                <Image source={{uri:cat.img}} style={{width:40, height:40,}}/>
                <Text style={{fontSize:14, color:'white', marginTop:5, width:'100%', textAlign:'center'}}>{cat.name}</Text>
                </View>
            </TouchableHighlight>
            </View>
        ))}
           </View>
            
        </View>
    )
}

export default Category