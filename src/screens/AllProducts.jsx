import { FlatList, StyleSheet, Text, View } from 'react-native';

const AllProducts = ({ data }) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>

      <FlatList 
        data={data}
        keyExtractor={(item) => item.id.toString()} // Ensures the key is a string
        renderItem={({ item }) => (
          <View style={[styles.itemContainer,{backgroundColor:item.stock > 100 ? "#D7F6BF":"#FFCCCC"}]}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.stock}</Text>
          </View>
        )}
        contentContainerStyle={{gap:10}}
      />
    </View>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderRadius:10,
  },
  itemText: {
    fontWeight: '500',
    fontSize: 20,
  },
});
