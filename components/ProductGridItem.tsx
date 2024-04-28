import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Rating from './Rating'; // Import the Rating component

const ProductGridItem = ({ item, onPress }) => {
  if (!item || !item.price) {
    return null; // Render nothing if item or price is undefined
  }

  const renderImage = () => {
    if (!item.image) {
      return (
        <Text style={styles.imagePlaceholder}>
          No Image Available
        </Text>
      );
    }

    return (
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        resizeMode="cover"
      />
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        {renderImage()}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.brand}>{item.brand.name}</Text>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
      </View>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>

      {/* Display rating using the Rating component */}
      <Rating rate={item.rate} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 10,
    height: 270,
    overflow: 'hidden', // Ensure content stays within the boundaries
  },
  imageContainer: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    color: '#ccc',
  },
  textContainer: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
  },
  brand: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginTop: 'auto', // Align price to the bottom of the card
  },
});

export default ProductGridItem;
