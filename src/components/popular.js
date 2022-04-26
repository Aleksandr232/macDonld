import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { Populars } from './populars';
import { COLORS } from './colors';

const Popular=()=>{
    [activepop, setActivepop]=useState(null)
    return(
        <View style={{paddingTop: 200}}> 
             <Text style={{fontWeight:'bold', fontSize:30, color:'white', bottom: 60}}>Popular</Text>
        <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', bottom:40  }}>
        {Populars.map((pop, idx)=>(
            <View style={{borderRadius:10, width:"20%", backgroundColor: activepop === idx ? COLORS.RED : COLORS.BLACK}}>
            <TouchableHighlight underlayColor={COLORS.RED} onPress={() => setActivepop(idx)}>
                <View style={{alignItems:'center'}}>
                <Image source={{uri:pop.img}} style={{width:50, height:60}}/>
                <Text style={{fontSize:14, color:'white', marginTop:2, width:'100%', textAlign:'center'}}>{pop.name}</Text>
                </View>
            </TouchableHighlight>
            </View>
        ))}
           </View>
            
        </View>
    )
}

export default Popular
