import React from "react";
import { SafeAreaView, Text, Image, ScrollView, View, Linking } from 'react-native';
import styles from './Details.style'
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Button from "../../components/Button";

const Details = ({ route }) => {

    const { id } = route.params
    const { data, error, loading } = useFetch(`${Config.API_KEY}/lookup.php?i=${id}`)

    const handleOnPress = async () => {

        let support = await Linking.canOpenURL(data.meals[0].strYoutube)
        if (!support) {
            Linking.openURL(data.meals[0].strYoutube)
        }
    }

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={styles.image} source={{ uri: data.meals[0].strMealThumb }} />
                <Text style={styles.name}>{data.meals[0].strMeal}</Text>
                <Text style={styles.country}>{data.meals[0].strArea}</Text>
                <View style={styles.seperator}></View>
                <Text style={styles.description}>{data.meals[0].strInstructions}</Text>
                <Button onPress={handleOnPress} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Details