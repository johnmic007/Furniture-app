import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import data from "../../assets/data.json";
import Categories from '../../component/categories/Categories';

const groupCategories = (categories) => {
  const groupedCategories = [];
  for (let i = 0; i < categories.length; i += 2) {
    const pair = [categories[i]];
    if (i + 1 < categories.length && categories[i + 1] !== categories[i]) {
      pair.push(categories[i + 1]);
    }
    groupedCategories.push(pair);
  }
  return groupedCategories;
};

const Category = () => {
  const allData = data && data.furnitureItems ? data.furnitureItems : [];
  const categories = Array.from(new Set(allData.map((item) => item.category)));
  const groupedCategories = groupCategories(categories);

  return (
    <ScrollView contentContainerStyle={styles.mainContainer} horizontal={false}>
      {groupedCategories.map((categoryPair, index) => (
        <View key={index} style={styles.rowContainer}>
          {categoryPair.map((category) => (
            <Categories
              key={category}
              category={category}
              img={allData.find((item) => item.category === category)?.thumbnail}
            />
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
});

export default Category;


