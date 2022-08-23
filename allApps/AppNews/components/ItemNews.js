import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../First/theme/style'
import { useNavigation } from '@react-navigation/native'

const ItemNews = ( {item} ) => {

    const navigation = useNavigation();

    const detailsNews = () => { 
        navigation.navigate( 'First' )
    }

  return (

    <TouchableOpacity
    onPress={ detailsNews }
    >

        <View style={ styles.app }>

            <View style={ styles.viewImageNews }>
            <Image source={ item.image } style={ styles.imageNews }>
                
            </Image>
            </View>
            
            <Text style={ styles.textNews }>{ item.titre }</Text>

        </View>

    </TouchableOpacity>

  )
}

export default ItemNews