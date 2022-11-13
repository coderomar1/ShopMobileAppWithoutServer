import { useContext, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ContextApi } from '../components/context';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Cart() {
  const { cart} = useContext(ContextApi);
  const c = JSON.parse(cart);
  const [Adadd , setAdadd] = useState(1)
  return (
<SafeAreaView style={styles.container}>
        <View style={styles.info}>
        {cart ? <View style={styles.row}>
                    <Image style={styles.img} source={c.img}/>
                    <Text style={styles.txt_name}>{c.name}</Text> 

                <Text>{/* زايد  */ }
                   <AntDesign style={styles.txt_name}
                    onPress={()=> setAdadd(Adadd + 1)}  
                    name="pluscircle" 
                    size={24} color="black" />
                </Text>
                   
                    <Text style={styles.txt_name}>{Adadd}</Text>
                {/* ناقص  */}
                <Text>
                    <AntDesign onPress={()=> setAdadd(Adadd - 1)} 
                    style={styles.txt_name}
                     name="minuscircle" 
                     size={24} 
                     color="black" /> 
                </Text>
                {/* حذف  */}
                <Text>
                    <AntDesign style={styles.txt_name} 
                     onPress={()=> AsyncStorage.clear('cart')} 
                     name="close" size={24} 
                     color="black" />
                </Text>     
            </View>
                :
            <Text>السلة خالية</Text>
                }
                
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
  info:{
    margin: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  img:{
    width: 100,
    height: 100,
    borderRadius: 10
  },
  txt_name:{
    marginHorizontal: 10
  }
});