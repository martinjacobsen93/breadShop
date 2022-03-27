import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { CATEGORIES } from '../../constants/categories'
import CategoryGrid from '../../components/molecules/CategoryGrid'

const Home = ({ navigation }) => {

    const handleSelectCategory = (category) => {
        navigation.navigate('Category', {id: category.id, name: category.name})
    }

    const renderItem = ({item}) => {
        return <CategoryGrid item={item} onSelected={handleSelectCategory}/>
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={CATEGORIES}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Home;