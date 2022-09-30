import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import styles from './CategoryLink.style'

const CategoryLink = ({ category, onPress }) => {

    const handlePushNavigation = () => {
        onPress(category.strCategory)
    }
    return (
        <TouchableWithoutFeedback onPress={handlePushNavigation}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
                <Text style={styles.title}>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryLink