import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {MaterialIcons } from '@expo/vector-icons';
import { useContext } from 'react';
import { ContextApi } from './context';


const {width} = Dimensions.get('screen'); // لأخذ عرض الشاشة المستخدمة

export default function ProdInfo({ route,navigation } ) {

    const {otherParam } = route.params; // get data from the link 
  const item =
   {
    name : otherParam.name,
    img: otherParam.img,
    disc: otherParam.disc
  }

    const { setCartData} = useContext(ContextApi);
  return (
<SafeAreaView style={styles.container}>
   <View style={styles.it}>
      <Image style={{width: width,height: 200}} source={otherParam.img} />
      <View>
          <Text style={styles.txt_name}>{otherParam.name}</Text>
          <Text style={styles.txt}>{otherParam.disc}</Text>
      </View>
      <TouchableOpacity onPress={()=> setCartData(item)} >
      <MaterialIcons name="add-shopping-cart" 
        style={styles.addToCart} 
        size={50} 
        color="white" 
        onPress={()=> setCartData(otherParam)} // to cart
        />
        </TouchableOpacity>
   </View>
</SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ddd',
      borderRadius: 5,
      
    },
    it:{
      backgroundColor: 'white',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15
    },
    txt:{
        padding: 5,
        textAlign: 'center',
        fontSize: 15
    },
    txt_name:{
      padding: 5,
      textAlign: 'center',
      fontSize: 25
  },
    addToCart:{
      backgroundColor: 'gray',
       textAlign: 'center',
       borderBottomLeftRadius: 15,
       borderBottomRightRadius: 15
    }
});