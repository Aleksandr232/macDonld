import { StyleSheet, Text, View, Image, Linking, TouchableHighlight} from 'react-native';

const Headers=()=>{
    return(
        <View style={{alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
            <View>
           <TouchableHighlight onPress={()=>Linking.openURL('https://mcdonalds.ru/')}>
           <Image source={{
                uri:'https://e7.pngegg.com/pngimages/646/484/png-clipart-mcdonald-s-logo-yellow-angle-font-mcdonald-s-logo-text-orange.png'
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
                uri:'https://e7.pngegg.com/pngimages/899/256/png-clipart-computer-icons-shopping-cart-shopping-cart-desktop-wallpaper-commerce.png'
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