import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, addFav } from '../../redux/action/cartAction';
import AntIcon from 'react-native-vector-icons/AntDesign';

const ProductImg = ({ id, img, title, price }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const favorites = useSelector((state) => state.cart.favorites);
  console.log(favorites)

  const isFavorite = favorites && favorites.includes(id);
  console.log(isFavorite)

  const handleAddToCart = () => {
    const item = { id, img, title, price };
    dispatch(addCart(item));
  };

  const handleToggleFavorite = () => {
    dispatch(addFav(id));
  };

  const navigateToProductPage = () => {
    navigation.navigate('ProductPage', { productId: id });
  };

  return (
    <TouchableOpacity onPress={navigateToProductPage}>
      <View style={styles.container}>
        <Image source={{ uri: img }} style={styles.image} />
        <TouchableOpacity onPress={handleToggleFavorite} style={styles.favContainer}>
          <Icon
            style={styles.fav}
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={30}
            color={isFavorite ? 'red' : 'black'}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price} ₹</Text>
          </View>
          <TouchableOpacity onPress={handleAddToCart}>
            <AntIcon
              style={styles.cart}
              name={'pluscircleo'}
              size={20}
              color={'#fffdf5'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#e4c2ff',
    backgroundColor: '#ab3dff',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    padding: 10,
    width: 200,
    height: 240,
    position: 'relative',
  },
  favContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  fav: {
    color: 'red',
  },
  image: {
    width: 180,
    height: 150,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 120,
  },
  price: {
    fontSize: 14,
    fontWeight: '800',
    color: 'gold'
  },
  cart: {
    backgroundColor: '#ffdd1a',
    borderRadius: 50,
    padding:5,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductImg;
