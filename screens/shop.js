import { createStackNavigator } from '@react-navigation/stack';
import ProdInfo from '../components/prodInfo';
import ProdItems from '../components/prodItems';

const Stack = createStackNavigator();  

export default function Shop() {
  return (
    <Stack.Navigator >
          <Stack.Screen name='proditems' component={ProdItems} options={{title: ''}}  />
          <Stack.Screen name='prodinfo' component={ProdInfo} options={{title: 'الرجوع'}}  />
    </Stack.Navigator>
  );
}
