import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreateProduct = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CreateProduct</Text>
    </View>
  )
}

export default CreateProduct

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'grey'
    },
    text:{
        backgroundColor:'red',
        fontWeight:'bold',
        fontSize:30
    }
})

//rnfes