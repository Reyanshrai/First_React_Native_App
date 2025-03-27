import { StyleSheet, Text, View } from 'react-native'

const AllProducts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AllProducts</Text>
    </View>
  )
}

export default AllProducts

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'grey'
    },
    text:{
        color:'red',
        fontWeight:'bold',
        fontSize:30,
    }
})