import { StyleSheet, Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        height: height / 1,
        width: width * 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'OpenSans-Regular',
        marginVertical: 20,
    }
})