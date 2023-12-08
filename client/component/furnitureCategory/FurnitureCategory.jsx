import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'; 


const FurnitureCategory = ({id, category, data }) => {

    const dispatch =useDispatch();
    const navigation=useNavigation();

  const handleAddToCart =()=>{
    item= {id, img , title, price}
    dispatch(addCart(item))
  }

  const navigateToProductPage=()=>{
    navigation.navigate('productPage' , {productId :id})
  }
  return (

    <TouchableOpacity onPress={navigateToProductPage}>
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{category}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        )}
      />
    </View>         
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: '#8f9edc',
    padding: 10,
    borderRadius:10,
    shadowColor: "#000000",
shadowOffset: {
  width: 0,
  height: 3,
},
shadowOpacity:  0.17,
shadowRadius: 3.05,
elevation: 4
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    backgroundColor: '#b7bede',
    textAlign: 'center', 
    textAlignVertical: 'center', 
  },
  itemContainer: {
    marginRight: 16,
  },
  thumbnail: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  itemName: {
    marginTop: 8,
    textAlign: 'center',
  },
});

export default FurnitureCategory;
