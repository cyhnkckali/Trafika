import React from "react";
import { SafeAreaView, FlatList } from 'react-native';
import Config from "react-native-config";
import useFetch from '../../hooks/useFetch'
import styles from './Categories.style'

import CategoryLink from '../../components/CategoryLink'
import Loading from '../../components/Loading';
import Error from '../../components/Error';


const Categories = ({ navigation }) => {
    const { data, error, loading } = useFetch(`${Config.API_KEY}/categories.php`)

    const renderCategory = ({ item }) => <CategoryLink category={item} onPress={onPushRouter} />

    const categoryKeyExtractor = item => item.idCategory

    const onPushRouter = (e) => {
        navigation.navigate('Meals', { id: e })
    }

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <SafeAreaView style={styles.contianer}>
            <FlatList style={styles.list} data={data.categories} renderItem={renderCategory} keyExtractor={categoryKeyExtractor} showsVerticalScrollIndicator={false} />
        </SafeAreaView>
    )
}


export default Categories