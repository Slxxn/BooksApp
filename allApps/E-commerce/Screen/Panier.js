import { View, Text, FlatList} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { styles } from '../theme/styles'
import { useDispatch } from 'react-redux'
import { removePanier,removeOnePanier } from '../../../redux/action'
import { Button } from '@rneui/themed'



const PanierItem = ({item}) =>{

  const dispatch = useDispatch();

  const removeOne = () => {
    dispatch(removeOnePanier(item))
  }

  return (
    <View style={styles.contentPanier}>
      <Text style={styles.nom}>{item.nom}</Text>
      <View></View>
      <Text style={styles.prix}>{item.prix}€</Text>
      <Button
        containerStyle={styles.button}
        title='delete'
        onPress={removeOne}
        color='red'
        />
    </View>
  )
}

const Panier = () => {

  const dispatch = useDispatch();

  const {dataPanier} = useSelector( state=>state)
  console.log('data panier:', dataPanier)

  const remove = () => {
    dispatch(removePanier())
  }

  return (
    <View>
      <FlatList
        style={styles.flatlist}
        data={dataPanier}
        renderItem={ ({item}) => <PanierItem item={item}/>}
        keyExtractor={item=>item.id}
      />
      <Button
        containerStyle={styles.buttonVider}
        title='Vider tout le panier'
        onPress={remove}/>
    </View>
  )
}

export default Panier