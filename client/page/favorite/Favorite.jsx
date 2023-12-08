import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import FavList from '../../component/favList/favList';

const Favorite = () => {
  const favList = useSelector((state) => state.cart.favList);
  console.log(favList);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Favorite List</Text>
      <View>
        {favList.map((item) => {
          return (
            <FavList
              key={item.id}
              id={item.id}
              img={item.thumbnail}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
  title: {
    fontSize: 20,
    backgroundColor: '#7B66FF',
    padding: 5,
    textAlign: 'center', 
  },
});


export default Favorite;
