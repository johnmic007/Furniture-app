import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CategoriesProduct = ({ id, img, price, title }) => {
  const navigation = useNavigation();

  const navigateToProductPage = () => {
    navigation.navigate('ProductPage', { productId: id });
  };

  return (
    <TouchableOpacity onPress={navigateToProductPage}>
      <View style={styles.productContainer} key={id || index}>
        <Image source={{ uri: img }} style={styles.image} />
        <View style={styles.secondContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price} ₹</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  secondContainer: {
    marginLeft: 10,
  },
  productContainer: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#ab3dff',
    borderRadius: 10,
    width:340,
    height: 130
  },
  image: {
    width: 140,
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    
  },
  title: {
    marginBottom: 60,
    marginTop: 5,
    fontSize: 20,
    fontWeight: '600'
  },
  price: {
    fontSize: 14,
    fontWeight: '800',
    color: 'gold'
  },
});

export default CategoriesProduct;
