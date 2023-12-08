import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../../redux/action/cartAction';
import { useRoute, useNavigation } from '@react-navigation/native'; 
import CategoriesProduct from '../../component/categoriesProduct/CategoriesProduct';

const CategoryList = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation(); 
  const categories = route.params.categories;

  useEffect(() => {
    dispatch(getCategory(categories));
  }, []);

  const productList = useSelector((state) => state.cart.categoryProducts[categories]);

  return (
    <View style={styles.container}>
      {productList &&
        productList.map((product, index) => (
          <CategoriesProduct
            key={product.id || index} 
            id={product.id}
            img={product.thumbnail}
            price={product.price}
            title={product.name}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#f6ebff',
      height: '100%'
    }
});

export default CategoryList;
