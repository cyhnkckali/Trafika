import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: 75,
        backgroundColor: "#fff",
        margin: 8,
        borderTopStartRadius: 50,
        borderTopRightRadius: 10,
        borderBottomStartRadius: 50,
        borderBottomRightRadius: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        paddingLeft: 24,
    }
})