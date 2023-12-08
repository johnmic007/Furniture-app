import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Categories = ({ category, img }) => {
  const navigation = useNavigation();

  const navigateToCategoryList = () => {
    navigation.navigate('CategoryList', { categories: category });
  };

  return (
    <TouchableOpacity onPress={navigateToCategoryList} style={styles.container}>
      <Image source={{ uri: img }} style={styles.image} blurRadius={2} />
      <Text style={styles.categoryText}>{category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
    margin: 8,
    flexShrink: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  categoryText: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Categories;
