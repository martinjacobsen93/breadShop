import { View, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { PRODUCTS } from '../../constants/products'
import CategoryProduct from '../../components/molecules/CategoryProduct'

const Category = ({navigation, route}) => {

  const { id } = route.params;

  const selectedCategoryItems = PRODUCTS.filter(categoryItem => categoryItem.category === id);

  const handleSelectedProduct = (product) => {
    navigation.navigate('ProductDetail', {product, name: product.name})
  }

  const renderItem = ({item}) => <CategoryProduct item={item} onSelectedBread={handleSelectedProduct}/>

    return (
      <View style={styles.container}>
        <FlatList
          data={selectedCategoryItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}>

        </FlatList>
      </View>
    )
}

export default Category;