import { View, Text, FlatList} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { stylep } from '../theme/stylePanier'
import { useDispatch } from 'react-redux'
import { removePanier,removeOnePanier } from '../../../redux/action'
import { Button } from '@rneui/themed'



const PanierItem = ({item}) =>{

  const dispatch = useDispatch();

  const removeOne = () => {
    dispatch(removeOnePanier(item))
  }

  return (
    <View style={stylep.contentPanier}>
      <Text style={stylep.nom}>{item.nom}</Text>
      <Text style={stylep.prix}>{item.prix}€</Text>
      <Button
        style={stylep.button}
        title='delete'
        onPress={removeOne}
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
        style={stylep.flatlist}
        data={dataPanier}
        renderItem={ ({item}) => <PanierItem item={item}/>}
        keyExtractor={item=>item.id}
      />
      <Button
        style={stylep.button}
        title='Vider le panier'
        onPress={remove}/>
    </View>
  )
}

export default Panier