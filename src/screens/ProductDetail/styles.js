import { StyleSheet, Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        height: height / 1,
        width: width * 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#212121',
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
        marginVertical: 20,
    }
})