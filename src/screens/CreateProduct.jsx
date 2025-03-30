import { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';

const CreateProduct = ({ data, setData }) => {
  const [itemName, setItemName] = useState('');
  const [stockAmt, setStockAmt] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const validateInputs = () => {
    if (!itemName.trim()) {
      Alert.alert('Validation Error', 'Item name cannot be empty');
      return false;
    }
    if (!/^[a-zA-Z ]+$/.test(itemName.trim())) {
      Alert.alert('Validation Error', 'Item name should only contain letters');
      return false;
    }
    if (!stockAmt.trim()) {
      Alert.alert('Validation Error', 'Stock amount cannot be empty');
      return false;
    }
    if (isNaN(stockAmt) || Number(stockAmt) <= 0) {
      Alert.alert('Validation Error', 'Stock amount must be a valid positive number');
      return false;
    }
    return true;
  };

  const handlerAddItem = () => {
    if (!validateInputs()) return;

    const newItem = {
      id: Date.now(),
      name: itemName.trim(),
      stock: Number(stockAmt),
    };

    setData([...data, newItem]);
    setItemName('');
    setStockAmt('');
    setIsEdit(false);
  };

  const deleteItemHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const editItemHandler = (item) => {
    setIsEdit(true);
    setItemName(item.name);
    setStockAmt(item.stock.toString());
    setEditItemId(item.id);
  };

  const updateItemHandler = () => {
    if (!validateInputs()) return;

    setData(
      data.map((item) =>
        item.id === editItemId ? { ...item, name: itemName.trim(), stock: Number(stockAmt) } : item
      )
    );
    setItemName('');
    setStockAmt('');
    setIsEdit(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an Item name..."
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />

      <TextInput
        placeholder="Enter stock amount..."
        placeholderTextColor="#999"
        style={styles.input}
        value={stockAmt}
        keyboardType="numeric"
        onChangeText={(text) => setStockAmt(text)}
      />

      <Pressable style={styles.button} onPress={() => (isEdit ? updateItemHandler() : handlerAddItem())}>
        <Text style={styles.btnTxt}>{isEdit ? 'Edit Item' : 'Add Item to Stock'}</Text>
      </Pressable>

      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>All Items in the Stock</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: item.stock > 100 ? '#D7F6BF' : '#FFCCCC' },
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>

              <View style={{ flexDirection: 'row', gap: 20 }}>
                <Text style={styles.itemText}>{item.stock}</Text>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
};

export default CreateProduct;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
  },
  button: {
    marginVertical: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  btnTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'yellow',
  },
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
    borderRadius: 10,
  },
  itemText: {
    fontWeight: '500',
    fontSize: 20,
  },
});
