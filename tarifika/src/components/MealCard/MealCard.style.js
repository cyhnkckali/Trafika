import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: 250,
        position: 'relative',
        borderRadius: 0,
        marginBottom: 0
    },
    title_body: { backgroundColor: "black", height: 36, position: 'absolute', zIndex: 2, width: "100%", bottom: 0, opacity: 0.75, lineHeight: 1, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
    title: { paddingHorizontal: 10, color: "#fff", position: 'absolute', textAlign: 'right', width: '100%', zIndex: 3, bottom: 5, fontSize: 20, },
    image: {
        borderRadius: 0,
        height: "100%",
        resizeMode: 'cover'
    }
})