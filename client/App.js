import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './page/home/Home';
import Favorite from './page/favorite/Favorite';
import Category from './page/category/Category';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './page/cart/Cart';
import Ct from './page/ct/Ct';
import ProductPage from './page/productPage/ProductPage';
import CategoryList from './page/categoryList/CategoryList';

const Stack = createNativeStackNavigator();

export default function App() {

   const [showToast,setShowToast]= useState(false);

   
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <Header />
          <View style={styles.contentContainer}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Cart" component={Cart} />
              <Stack.Screen name="Ct" component={Ct} />
              <Stack.Screen name="Favorite" component={Favorite} />
              <Stack.Screen name="Category" component={Category} />
              <Stack.Screen name="ProductPage" component={ProductPage} />
              <Stack.Screen name="CategoryList" component={CategoryList} />
            </Stack.Navigator>
          </View>
        </View>
        <Footer />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    marginTop: 70, 
  },
});
