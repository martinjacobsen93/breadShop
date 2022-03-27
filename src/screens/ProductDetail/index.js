import { Text, View, Button } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { colors } from '../../constants/themes'

const ProductDetail = ({ route, navigation }) => {

  const { product } = route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Detalle del producto</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.weight}>{product.weight}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
        <Button title='Comprar' color={colors.secondaryColor} onPress={()=> navigation.navigate('Home')}/>
      </View>
    )
}

export default ProductDetail;