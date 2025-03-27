import {Pressable, StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <View
        style={[
          styles.container,
          { flexDirection: 'row', justifyContent: 'space-evenly'},
        ]}>
        <Pressable style={styles.button}
          onPress={''}
        >
          <Text style={styles.buttonText}>All Items</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Low Stocks</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Create Product</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    paddingTop: 30,
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: 110,
    height: 40,
    // backgroundColor:'red',
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 50,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
