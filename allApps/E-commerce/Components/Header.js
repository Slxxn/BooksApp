import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Entypo'
// import firestore from '@react-native-firebase/firestore'
import { Image } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const Header = () => {

  const navigation = useNavigation() ;

  const Retour = () => {
    navigation.goBack() ;
  }

  return (

    <View style={styles.header}>
      
      <TouchableOpacity style={styles.icon} onPress={ Retour }>
        <Icon2 name='back' size={35} color='black'/>
      </TouchableOpacity>
      
     

      {/* METTRE source = { { uri : } } et require quand l'image est stocké localement */}
      <Image
      style={styles.itemImage}
      transition={true}
      transitionDuration={5000}
      source={ require('../../youtube/images/logo.jpg') }
      />
      
      <Icon name='watch' size={25} color='black' />

    </View>
  )
  
}

export default Header

const styles = StyleSheet.create({

    header:{
        height:55,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
        paddingHorizontal:15,
        marginTop:15,
    },

    itemImage:{
        flex:1,
        height:'100%',
        aspectRatio: 4.5,
    },

    icon:{
      height:55, 
      width:60,
      justifyContent:'center', 
      alignItems:'center'
    }

})