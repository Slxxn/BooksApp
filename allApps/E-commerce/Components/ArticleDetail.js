import { View, Text, Button } from 'react-native'
import React from 'react'
import { styled } from '../theme/styleDetails';
import Header from './Header';
import { Image } from '@rneui/base';
import { useDispatch } from 'react-redux';
import {addPanier} from '../../../redux/action'
import { Icon } from 'react-native-vector-icons/Icon';

const ArticleDetail = ({articles}) => {

  const dispatch = useDispatch();

  const ajouter = () => {
    dispatch(addPanier(articles))
  }

  return (
  
      <View style={styled.details}>
          
        {/* <Image style={styled.hautimagegch} source={ { uri : articles.image } } />  */}
        <Header/>

        <Button
          style={styled.button}
          title='Ajouter au panier'
          onPress={ajouter}
          />

        <View>
            <Text> {articles.nom} </Text>
        </View>

      </View>  

  )
}

export default ArticleDetail