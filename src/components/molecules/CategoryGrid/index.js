import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';

const CategoryGrid = ({item, onSelected}) => {

  return (
    <TouchableOpacity 
      style={{...styles.touchable, ...{backgroundColor: item.color}}}
      onPress={()=> onSelected(item)}
    >
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryGrid