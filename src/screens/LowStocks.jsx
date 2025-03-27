import { StyleSheet, Text, View } from 'react-native'

const LowStocks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LowStocks</Text>
    </View>
  )
}

export default LowStocks

const styles = StyleSheet.create({
    container:{
        widht:'100%',
        height:'100%',
        backgroundColor:'grey',
    },
    text:{
        color:'red',
        fontWeight:'bold',
        fontSize:30
    }
})