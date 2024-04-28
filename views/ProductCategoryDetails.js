import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { ProductService } from '../app/productService';
import ProductHeader from '../components/ProductDetailsHeader';
import ProductGridItem from '../components/ProductGridItem';
import { useNavigation } from '@react-navigation/native';

const ProductCategoryDetails = (props) => {
  const productService = new ProductService();

  // Fetch categories data; replace with actual category retrieval logic
  const categories = productService.getCategories('Personal Care');
  const { subCategories, name } = categories;

  const [prodList, setProdList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCatId, setSelectedCatId] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    // Simulate HTTP request delay
    setTimeout(() => {
      const allProducts = productService.getAllProducts();
      setProdList(allProducts);
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleItemPress = (item) => {
    console.log('Item Pressed:', item);
    navigation.navigate('item_details', { item });
  };

  return (
    <>
      <ProductHeader
        categoryName={name}
        productService={productService}
        onProdListStateChanged={setProdList}
        selectedCatId={selectedCatId}
        onChangeSelectedCatId={setSelectedCatId}
        subCategories={subCategories}
      />

      {isLoading && <ActivityIndicator size="large" />}

      <FlatGrid
        showsVerticalScrollIndicator={false}
        itemDimension={130}
        data={prodList || []}
        renderItem={({ item }) => (
          <ProductGridItem item={item} onPress={() => handleItemPress(item)} />
        )}
      />
    </>
  );
};

export default ProductCategoryDetails;
