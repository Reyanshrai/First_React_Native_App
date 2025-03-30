import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import AllProducts from './AllProducts';
import CreateProduct from './CreateProduct';




const Home = () => {
  const [view, setView] = useState(0);
  const [data , setData] = useState([
    { id: 1, name: "Rice", stock: 120, unit: "kg" },
  { id: 2, name: "Wheat", stock: 90, unit: "kg" },
  { id: 3, name: "Corn", stock: 150, unit: "kg" },
  { id: 4, name: "Barley", stock: 80, unit: "kg" },
  { id: 5, name: "Oats", stock: 60, unit: "kg" },
  ])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable 
          style={[styles.button, view === 0 ? styles.activeButton : null]} 
          onPress={() => setView(0)}>
          <Text style={styles.buttonText}>All Items</Text>
        </Pressable>
        <Pressable 
          style={[styles.button, view === 1 ? styles.activeButton : null]} 
          onPress={() => setView(1)}>
          <Text style={styles.buttonText}>Low Stocks</Text>
        </Pressable>
        <Pressable 
          style={[styles.button, view === 2 ? styles.activeButton : null]} 
          onPress={() => setView(2)}>
          <Text style={styles.buttonText}>Create Product</Text>
        </Pressable>
      </View>

      {view === 0 && <AllProducts data={data} />}
      {view === 1 && <AllProducts data={data.filter((item) => item.stock < 100 )}/>}
      {view === 2 && <CreateProduct data={data} setData={setData}/>}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    paddingTop: 30,
  },
  text:{
    fontWeight:'bold',
    fontSize:30,
    paddingVertical:20,
      
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    marginBottom: 20, 
  },
  button: {
    width: 110,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: 'red', 
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});