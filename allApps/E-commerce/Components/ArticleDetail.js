import { View, Text} from 'react-native'
import React from 'react'
import { styles } from '../theme/styles';
import Header from './Header';
import { Image } from '@rneui/base';
import { Button } from '@rneui/themed'
import { useDispatch } from 'react-redux';
import {addPanier} from '../../../redux/action'

const ArticleDetail = ({articles}) => {

  const dispatch = useDispatch();

  const ajouter = () => {
    dispatch(addPanier(articles))
  }

  return (

    <View style={{ flex:1}}>
        
      
      <Header/>

      <Text style={styles.detailTitle}>{articles.nom}</Text>

      <View  style={styles.imageView}>
        
        <View style={styles.primaryImageView}>
           <Image style={styles.primaryImage} source={{ uri : articles.image }}/>
        </View>
      

        <View style={styles.secondaryImageView}>
          <Image style={styles.secondaryImage} source={{ uri : articles.image }}/>
          <Image style={styles.secondaryImage} source={{ uri : articles.image }}/>
          <Image style={styles.secondaryImage} source={{ uri : articles.image }}/>
        </View>

      </View>
       
      <Text style={styles.detailTitle}>{articles.prix}.0 €</Text>

      <Button
        containerStyle={styles.buttonVider}
        title='Ajouter au panier'
        onPress={ajouter}
        />

    </View>  

  )
}

export default ArticleDetail