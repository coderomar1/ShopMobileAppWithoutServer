
import { FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native';
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'

const {width,height} = Dimensions.get('screen');

export default function ProdItems({ navigation }) {


const data = [
    {
        id: 1,
        name: 'motherboard Atx-1344 amd' ,
        disc: 'لوحة ام  للكمبيوتر  تدعم معالجات اي ام دي الثاني',
        img: one,
    },
    {
        id: 2,
        name: 'motherboard Atx-334 intl' ,
        disc: 'لوحة ام  للكمبيوتر  تدعم معالجات انتل الجيل الثالث',
        img:two
    },
    {
      id: 3,
      name: 'motherboard Atx-421 amd' ,
      disc: 'لوحة ام  للكمبيوتر  تدعم معالجات اي ام دي الجيل الاول',
      img:three
    },
];    
const ProdCard = ({item})=>{ // بطاقة تعرض معلومات المنتج
    return(
        <TouchableOpacity style={styles.item} onPress={()=> {
          navigation.navigate('prodinfo',{ otherParam: item });
          }} >
            <Text style={{textAlign: 'center', fontSize: 20}}>{item.name}</Text>
            <Image style={styles.img} key={item.id} source={item.img} />
            <Text style={{textAlign: 'center'}}>{item.disc}</Text>
        </TouchableOpacity>
    )
} 
  return (
<SafeAreaView style={styles.container}> 
        <FlatList 
          scrollEnabled
          data={data}
          renderItem={ProdCard}
          keyExtractor={item => item.id}
          
          />
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: width - 40,
    height: 400,
    margin:20 ,
  },
  img:{
  width: width - 80 ,
  height: 300,
  marginVertical: 10,
  }
});
