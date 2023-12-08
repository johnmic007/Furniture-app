import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { removeFav } from '../../redux/action/cartAction';

const FavList = ({ id, img, price, name }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFav(id));
  };

  return (
    <View style={styles.container} key={id}>
      <Image source={{ uri: img }} style={styles.image} />
      <View style={styles.secondContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price} ₹</Text>
      </View>
      <TouchableOpacity onPress={handleRemove} style={styles.favContainer}>
        <Icon
          style={styles.icon}
          name="closecircleo"
          size={30}
          color="#e8ebeb"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: '#ab3dff',
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10,
    padding: 10,
    width: 370,
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 120,
    resizeMode: 'cover',
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    width: 110,
  },
  icon: {
    marginLeft: 'auto', 
  },
  price: {
    fontSize: 14,
    fontWeight: '800',
    color: 'gold',
  },
  secondContainer: {
    flex: 1, 
  },
});

export default FavList;
