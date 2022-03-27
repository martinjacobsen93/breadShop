import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';

const CategoryProduct = ({item, onSelectedBread}) => {

  return (
    <TouchableOpacity 
      style={styles.touchable}
      onPress={()=> onSelectedBread(item)}
    >
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default CategoryProduct;