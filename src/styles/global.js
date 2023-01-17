import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        position:'absolute',
        backgroundColor: '#4286f4',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '50%',
        bottom: 200,
        left:'25%'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
    data: {
        marginTop: 10,
        color: '#4286f4',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});