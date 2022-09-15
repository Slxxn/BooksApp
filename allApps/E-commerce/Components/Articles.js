import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../theme/styles'

const RenderArticles = ( {articles} ) => {

    const navigation = useNavigation() ;

    const AllerVersDetails = () => {
        navigation.navigate( 'DetailsArticle', { id: articles.id } )
    }
    
    return (
        <TouchableOpacity style={ styles.articleRender } onPress={ AllerVersDetails } >
            <Text style={ styles.articleRenderText } >
                { articles.nom }
            </Text>
        </TouchableOpacity>
    )
    
}

const Articles = () => {

//   Récupère les datas dans le state
  const { dataArticle } = useSelector( state => state ) ;
  console.log( dataArticle )
    
  return (

    <View style={ styles.articleView } >

      <Text style={ styles.articleTitle } >Articles</Text>

      <FlatList
        data={ dataArticle }
        horizontal={false}
        numColumns = {3}
        renderItem = { ( {item} ) =>
        <RenderArticles articles={item} />
        }
        showsHorizontalScrollIndicator={false}
        // keyExtractor = { item => item.id }
        keyExtractor = { (item, index) => 'key' + index}
        
      />

    </View>
  )
}

export default Articles
