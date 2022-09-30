import React from "react";
import { SafeAreaView, FlatList } from 'react-native';
import Config from "react-native-config";
import useFetch from '../../hooks';
import styles from './Meals.style'
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import MealCard from "../../components/MealCard";

const Meals = ({ navigation, route }) => {

    const { id } = route.params
    const { data, error, loading } = useFetch(`${Config.API_KEY}/filter.php?c=${id}`)
    const renderMeals = ({ item }) => <MealCard meal={item} onPress={onPushRouter} />

    const onPushRouter = (e) => {
        navigation.navigate('Detail', { id: e.idMeal })
    }

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data.meals} renderItem={renderMeals} showsVerticalScrollIndicator={false} />
        </SafeAreaView>
    )
}

export default Meals