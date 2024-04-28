import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using Expo and FontAwesome

const Rating = ({ rate }) => {
  console.log('Rating:', rate);

  const filledStars = Math.floor(rate / 20); // Each star represents 20% of rating
  const remainingPercentage = rate % 20; // Remaining percentage to show half-star

  const renderStars = () => {
    let stars = [];

    // Add filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(<FontAwesome key={i} name="star" color="#f1c40f" size={16} />);
    }

    // Add half-star if remainingPercentage >= 10
    if (remainingPercentage >= 10) {
      stars.push(<FontAwesome key="halfStar" name="star-half-full" color="#f1c40f" size={16} />);
    }

    return stars;
  };

  console.log('Stars:', renderStars());

  return (
    <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
      {renderStars()}
      <Text style={{ marginLeft: 5 }}>{rate}%</Text>
    </View>
  );
};

export default Rating;
