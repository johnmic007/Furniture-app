// ProductPage.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/action/cartAction';
import { addCart } from '../../redux/action/cartAction';

const ProductPage = () => {
  const route = useRoute();
  const productId = route.params.productId;

  const [thumbnail, setThumbnail] = useState(null);

  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.cart.selectedProduct);

  useEffect(() => {
    dispatch(getProduct(productId));
    if (selectedProduct && selectedProduct.imageUrl.length > 0) {
      setThumbnail(selectedProduct.imageUrl[0]);
    }
  }, [dispatch, productId, selectedProduct]);

  const handleSubImagePress = (img) => {
    setThumbnail(img);
  };

  const { id, name, category, price, description } = selectedProduct || {};

  const handleAddToCart = () => {
    if (!id) {
      console.error("Product id is not available.");
      return;
    }

    const item = { id, img: thumbnail, title: name, price };
    dispatch(addCart(item));
  };

  return (
    <View style={styles.container}>
      {selectedProduct && (
        <View style={styles.container}>
          <View style={styles.firstContainer}>
            {thumbnail && (
              <Image source={{ uri: thumbnail }} style={styles.image} />
            )}
            <View style={styles.slide}>
              {selectedProduct &&
                selectedProduct.imageUrl.map((img, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleSubImagePress(img)}
                  >
                    <Image source={{ uri: img }} style={styles.subImg} />
                  </TouchableOpacity>
                ))}
            </View>
          </View>
          <View style={styles.secondContainer}>
            <View style={styles.row}>
              <Text style={styles.name}>{name}</Text>
              <Text>{category}</Text>
            </View>
            <Text style={styles.price}>{price} ₹</Text>
            <TouchableOpacity onPress={handleAddToCart}>
              <Text style={styles.cart}>Add to Cart</Text>
            </TouchableOpacity>
            <Text>{description}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:10,
    height: '100%',
  },
  firstContainer: {
   
  },
  name: {
    fontSize: 30,
    fontWeight: '800',
  },
  cart: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white', 
    backgroundColor: 'gold',
    width: 150,
    paddingHorizontal: 20,
    borderRadius: 5,
    textAlign: 'center', 
    paddingVertical: 10,  
  },
  price: {
    fontSize: 20,
    fontWeight: '400',
    color: '#e43c38',
  },
  image: {
    width: 350,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 5,
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subImg: {
    width: 100,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  slide: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 5,
  },

  secondContainer: {
    gap: 10,
  },
});

export default ProductPage;
