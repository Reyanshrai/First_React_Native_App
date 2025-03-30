import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'

const App = () => {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the app takes full screen
  },
})