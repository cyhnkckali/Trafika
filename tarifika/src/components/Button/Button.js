import React from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './Button.style'


const Button = ({ onPress }) => {
    const handleOnPress = () => {
        onPress()
    }
    return (
        <TouchableOpacity onPress={handleOnPress}>
            <View style={styles.container}>
                <Text style={styles.title}>Watch on  Youtube</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button