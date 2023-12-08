
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import hero1 from "../../assets/hero2.jpeg";
import data from '../../assets/data.json';
import ProductImg from '../../component/productImg/ProductImg';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/action/cartAction'; 

const Home = () => {
  const dispatch = useDispatch();
  const allData = data && data.furnitureItems ? data.furnitureItems : [];

  const allProduct = useSelector((state) => state.cart.product);
   
  useEffect(() => {

    dispatch(addProduct(allData));
  }, [dispatch, allData]);

  return (
    <View style={styles.container}>
      

       <ScrollView>

       <Image source={hero1} style={styles.image} />


       <View  style={styles.productContainer} >
        <Text style={styles.title} >Todays Deal</Text>
      <ScrollView
        horizontal       
      >
        {allData.map((item) => (
          <View style={styles.itemContainer} key={item.id}>
            <ProductImg
              id={item.id}
              img={item.thumbnail}
              title={item.name}
              price={item.price}
            />
          </View>
        ))}
      </ScrollView>

      </View>

      <View  style={styles.productContainer} >
        <Text style={styles.title} >Fast moving</Text>
      <ScrollView
        horizontal
        
      >
        {allData.map((item) => (
          <View style={styles.itemContainer} key={item.id}>
            <ProductImg
              id={item.id}
              img={item.thumbnail}
              title={item.name}
              price={item.price}
            />
          </View>
        ))}
      </ScrollView>

      </View>

       </ScrollView>


 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fbf5ff',
    paddingBottom:50,
  },
  image: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
  },
  productContainer: {
    margin: 5,
    backgroundColor: '#f6ebff',
    flexDirection: 'column',
  },
  itemContainer: {
    marginRight: 10,
  },
  title:{
   fontSize:30,
   fontWeight: '900'
  }
});

export default Home;