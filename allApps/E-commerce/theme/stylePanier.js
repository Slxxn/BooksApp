import { StyleSheet } from "react-native"

import { colors } from "./colors"

export const stylep = StyleSheet.create({

    flatlist:{
        width:'100%',
        padding:10
        
      },

    contentPanier:{
        height:60,
        width:'100%',

        margin:5,
        padding:10,
        borderRadius:15,
        borderStyle:'solid',
        borderWidth:2,

        alignSelf:'center',
        justifyContent:'space-between',
        backgroundColor:'#9090AE',

        flexDirection:'row',
    },

    nom:{
        fontSize:20,
        color:'black'
    },

    prix:{
        fontSize:20,
        color:'black'
        
    },

    button:{
        width:50,
        borderRadius:15,
        margin:10
    }

    

})