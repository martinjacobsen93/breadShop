import { StyleSheet, Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    touchable: {
        flex: 1,
        padding: 10,
        height: height / 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        justifyContent: 'center',
        alignItems: 'center',

        elevation: 3,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
    },
    description: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
    },
    price: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
    }
})