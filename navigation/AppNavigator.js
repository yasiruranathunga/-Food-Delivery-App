import React, { useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductCategoryDetails from '../views/ProductCategoryDetails';
import ProductDetail from '../views/item_details';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            
            <Stack.Screen name="Product Category Details" component={ProductCategoryDetails} />  
            <Stack.Screen name="item_details" component={ProductDetail} />
            
            </Stack.Navigator>
        </NavigationContainer>
    )
}
