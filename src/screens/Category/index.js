import { Text, View, Button } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Category = ({navigation}) => {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Categoria</Text>
        <Button title='Ir a detalle de Producto' onPress={()=> navigation.navigate('ProductDetail')}/>
      </View>
    )
}

export default Category;