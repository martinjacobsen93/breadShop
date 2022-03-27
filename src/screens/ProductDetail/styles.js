import { StyleSheet, Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        // height: height / 1,
        width: width * 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        color: '#212121',
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
        marginVertical: 20,
    },
    detailsContainer: {
        height: height / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    weight: {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10
    }
})