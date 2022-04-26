import { StyleSheet, Text, View, Image, Linking, TouchableHighlight} from 'react-native';

const Headers=()=>{
    return(
        <View style={{alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
            <View>
           <TouchableHighlight onPress={()=>Linking.openURL('https://mcdonalds.ru/')}>
           <Image source={{
                uri:'https://kirovskiy.ru/upload/iblock/ec8/ec8310bd6a3a14130896df93ed6fbfc4.png'
            }} 
            style={{
                width:70,
                height:65
            }}
            />
           </TouchableHighlight>
           </View>
           <View>
           <TouchableHighlight onPress={()=>Linking.openURL('https://mcdonalds.ru/')}>
           <Image source={{
                uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAJg-q10AaUkhV8By-7bE8noJDLerli1Evg&usqp=CAU'
            }} 
            style={{
                width:70,
                height:35
            }}
            />
           </TouchableHighlight>
           </View>
        </View>
    )
}

export default Headers