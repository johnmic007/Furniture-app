import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image } from 'react-native';
import { useSelector } from 'react-redux';
import ListImg from '../../component/listImg/ListImg';
import emptyCart from '../../assets/emptyCart.jpg'

const Ct = () => {
  const cartItems = useSelector(state => state.cart.cart);
  console.log(cartItems);

  const totalitems = useSelector((state) => state.cart.total)
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.cartTitle}>Cart is Empty</Text>
        <Image style={styles.cart} source={emptyCart} />
      </View>
    );
  }

  const totalItems = cartItems.length;
  const totalAmount = cartItems.reduce((acc, item) => acc + item.total, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Items</Text>
      <ScrollView style={styles.productList}>
        {cartItems.map(item => (
          <ListImg id={item.id} img={item.img} title={item.title} price={item.price} qty={item.qty} />
        ))}
      </ScrollView>

      <View style={styles.total}>
        <View style={styles.row}>
          <Text style={styles.text}>Total Items : </Text>
          <Text style={styles.text}>{totalItems}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Total Amount : </Text>
          <Text style={[styles.text, { color: '#fbf5ff' }]}>{totalAmount}</Text>
        </View>
        <Text>Buy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cart:{
   width: '100%' ,
   height:400 ,
  },
  cartTitle:{
      fontSize:50,
      fontWeight: '500'
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    margin: 20,
  },
  title: {
    backgroundColor: '#8696FE',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    padding: 10,
  },
  total: {
    backgroundColor: '#2e0052',
    borderRadius: 20,
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
  },
  container: {
    height: '100%',
  },
  text: {
    color: 'white',
  },
  productList: {
    marginBottom: 160,
    borderRadius: 5,
    flexGrow: 1, 
  },
});

export default Ct;
