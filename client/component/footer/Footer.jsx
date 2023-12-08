import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <Icon
        name="ios-home"
        size={30}
        color="#fff"
        onPress={() => navigation.navigate('Home')}
      />
      <Icon
        name="heart"
        size={30}
        color="#fff"
        onPress={() => navigation.navigate('Favorite')}
      />
      <MaterialIcons name="category" 
            size={30} 
            color="#fff"
            onPress={() => navigation.navigate('Category')}
       />

    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Footer;
