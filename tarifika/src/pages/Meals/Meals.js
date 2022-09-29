import React from "react";
import { SafeAreaView, FlatList } from 'react-native';
import styles from './Meals.style'


const Meals = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={null} renderItem={null} />
        </SafeAreaView>
    )
}

export default Meals