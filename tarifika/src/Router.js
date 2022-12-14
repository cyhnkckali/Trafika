import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Details from './pages/Details';

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Categories} options={{ headerTitle: 'Categories', headerTitleAlign: 'center', headerTitleStyle: { color: '#ff3d00' } }}></Stack.Screen>
                <Stack.Screen name='Meals' component={Meals} options={{ headerTitle: 'Meals', headerTitleAlign: 'center', headerTitleStyle: { color: '#ff3d00' }, }}></Stack.Screen>
                <Stack.Screen name='Detail' component={Details}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Router;
