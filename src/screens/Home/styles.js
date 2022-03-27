import { StyleSheet, Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        height: height / 1,
    },
    title: {
        color: '#212121',
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
        marginVertical: 20,
    }
})