import { StyleSheet, Text, View, onPress } from 'react-native'
import React from 'react'
import { Button } from "@rneui/themed";
import { editUser } from '../../../redux/action';
//configuration de la navigation 
import { useNavigation } from '@react-navigation/native'

const Connexion = () => {

  const navigation = useNavigation()

  //Création de la navigation vers "Inscription"
  const onPressInscription = () =>{
    navigation.navigate('Inscription')
  }

  return (
    <View>

      <Button 
          title="Connexion" 
          type="clear"
         />
      <Button 
          title="Incrivez vous" 
          type="clear"
          onPress={onPressInscription} />

    </View>
  )
}

export default Connexion
