import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome   } from '@expo/vector-icons';
import Cont from './screens/cont';
import Shop from './screens/shop';
import Cart from './screens/cart';
import { ContextApi } from './components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const Tab =createBottomTabNavigator();

export default function App(){
  
  const setCartData = async (d)=>{
    const v = JSON.stringify(d)
await AsyncStorage.setItem("cart",v); // AsyncStorage its like LocalStorage  i use it because LocalStorage dose't work with mobile apps 
  }
const [cart , setCart] = useState('لا يوجد');

useEffect(()=>{
  AsyncStorage.getItem("cart").then((v)=>{
    setCart(v)
  })
})
  return (
<ContextApi.Provider value={{setCartData,cart}}>
  <NavigationContainer>
    <Tab.Navigator 
      screenOptions={({ route})=> ({
        tabBarIcon:({focused,color, size})=>{ // manage icons
          let icon 
          if(route.name === 'المتجر'){
            icon = focused = 'shopping-bag'
          } else if (route.name === 'لتواصل'){
            icon = focused = 'whatsapp'
          }
          else if (route.name === 'السلة'){
            icon = focused = 'shopping-cart'
          }
          return <FontAwesome  name={icon} size={size} color={color}/>
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}
      >
                < Tab.Screen name='المتجر' component={Shop} 
                  options={{
                    title: 'المتجر',
                    headerTitleAlign: 'center'
                  }} />
                  <Tab.Screen name='السلة' component={Cart}
                  options={{
                    title: 'السلة',
                    headerTitleAlign: 'center'
                  }}/>
                  <Tab.Screen name='لتواصل' component={Cont}
                  options={{
                    title: 'لتواصل',
                    headerTitleAlign: 'center'
                  }}/>   
    </Tab.Navigator>
</NavigationContainer>
</ContextApi.Provider>
  );
}


