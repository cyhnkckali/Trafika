import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import styles from './MealCard.style';



const MealCard = ({ meal, onPress }) => {
    const handleOnPress = () => {
        onPress(meal)
    }
    return (
        <TouchableWithoutFeedback onPress={handleOnPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
                <View style={styles.title_body}>
                </View>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{meal.strMeal}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}


export default MealCard