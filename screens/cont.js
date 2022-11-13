import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Cont() {
  
  return (
<SafeAreaView style={styles.container}>
        <View style={styles.info}>
                    <Text style={{fontSize: 40}}>عالواتس اب :0555555431</Text>
                    <Text style={{fontSize: 40}}>انستقرام : microship_shopsa</Text>
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
    marginVertical: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    
  }
});