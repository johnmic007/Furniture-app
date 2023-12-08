import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQty, increaseQty, removeCart } from '../../redux/action/cartAction';

const ListImg = ({ id, img, price, title, qty }) => {
  const dispatch = useDispatch();


  const updatedQty = useSelector((state) => state.cart.cart.find((item) => item.id === id)?.qty);
  const updatedPrice = useSelector((state) => state.cart.cart.find((item) => item.id === id)?.total);


  const onDeletePress = () => {
    dispatch(removeCart(id));
  };

  return (
    <View style={styles.mainContainer}>
      <Image source={{ uri: img }} style={styles.image} />
      <View style={styles.subContainer}>
        <Text>{title}</Text>
        <Text>{updatedPrice}</Text>
        <View style={styles.buttonContainer}>
          {/* Use the updatedQty from the Redux store */}
          <TouchableOpacity onPress={() => dispatch(increaseQty(id))} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{updatedQty}</Text>
          {/* Use the updatedQty from the Redux store */}
          <TouchableOpacity onPress={() => dispatch(decreaseQty(id))} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={onDeletePress} style={styles.deleteButton}>
        <Icon name="trash-outline" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
    margin: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: '#ab3dff',
    margin: 5,
    borderRadius: 10,
  },
  subContainer: {
    justifyContent: 'space-between',
    padding: 15,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#edd6ff',
    justifyContent: 'center',
    width: 100,
    padding: 2,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#cc8aff',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    backgroundColor: '#edd6ff',
    paddingHorizontal: 10,
    width: 37,
  },
});

export default ListImg;
