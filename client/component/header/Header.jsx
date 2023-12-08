import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../../assets/logo.jpg';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logo} />
      <Icon
        name="shopping-cart"
        onPress={() => navigation.navigate('Ct')}
        size={30}
        color="#f2e0ff"
        style={styles.cart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {},
  logo:{
    height:40,
    width:40
  },
  header: {
    backgroundColor: '#2e0052',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingTop:30,
    paddingHorizontal:10,
  },
  img: {
    width: 100,
    height: 100,
  },
});

export default Header;
