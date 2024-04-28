import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Rating from '../components/Rating'; // Import the Rating component

const ProductDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.brand}>Brand: {item.brand.name}</Text>
      <Text style={styles.price}>Price: ${item.price}</Text>
      <Rating rate={item.rate} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  brand: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default ProductDetailsScreen;
