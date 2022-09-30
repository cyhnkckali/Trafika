import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 5
    },
    name: { fontSize: 24, color: 'red', fontWeight: '500', },
    country: { fontSize: 18, color: 'red', fontWeight: '400' },
    description: { fontSize: 16 },
    image: {
        height: 250,
        color: '#000'
    },
    seperator: {
        width: "100%",
        height: 2,
        borderBottomWidth: 1,
        marginVertical: 3,
        borderBottomColor: '#dfdfdf',
    },
})