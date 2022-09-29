import React from "react";
import { SafeAreaView, FlatList, Text } from 'react-native';
import Config from "react-native-config";
import styles from './Categories.style'


const Categories = () => {

    return (
        <SafeAreaView style={styles.contianer}>
            <Text> Hello My World {Config.API_KEY}</Text>
            {/* <FlatList renderItem={null} data={null} /> */}
        </SafeAreaView>
    )
}


export default Categories