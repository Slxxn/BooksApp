import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

     /*---------------------------------------------------------
                        STYLE CATEGORIE 
    ---------------------------------------------------------*/
    
    categorieView: {
        width : '100%',
    },
    
    categorieTitle: {
        fontSize : 25,
        fontWeight : '500',
        marginBottom: 5,
    },

    categorieRender: {
        backgroundColor: '#1DA1F2',
        margin: 10,
        borderRadius:10,
        justifyContent:'center',
        height: 40,
        // marginTop : 5,
    },
    
    categorieRenderText: {
        // backgroundColor : 'red',
        color:"#fff",
        marginLeft : 5,
        width : 105,
        textAlign:'center',
        alignSelf : 'center'
    },

    /*---------------------------------------------------------
                        STYLE ARTICLES 
    ---------------------------------------------------------*/

    articleView: {
        width : '100%',
    },
    
    articleTitle: {
        fontSize : 25,
        fontWeight : '500',
        marginBottom: 5,
    },
    
    articleRenderText: {
        // backgroundColor : 'red',
        color:"#fff",
        width : 105,
        textAlign:'center',
        borderRadius: 25,
        alignSelf : 'center'
    },
    
    articleRender: {
        backgroundColor: 'orange',
        margin: 10,
        borderRadius: 10,
        justifyContent:'center',
        height: 100,
        width:100,
        // marginTop : 5,
    },
    
    /*---------------------------------------------------------
                        STYLE DETAILS ARTICLES 
    ---------------------------------------------------------*/

    detailTitle:{
        fontSize:25,
        color:'black',
        alignSelf:'center',
        marginVertical:5,
        borderRightWidth:5,
        borderLeftWidth:5,
        paddingHorizontal:20,
        paddingRight:15
    },

    imageView:{
        flexDirection:"row",
        borderStyle:'solid',
        borderWidth:2,
        borderColor:'white',
        width:'100%',
    },

    primaryImageView:{
        height:353.5,
        width:'70%',
    },

    primaryImage:{
        height:'100%',
        width:'100%',
        borderStyle:'solid',
        borderWidth:2,
        borderColor:'white',
    },

    secondaryImageView:{
        width:'30%',
        backgroundColor:'red',
        justifyContent:'space-between'
    },

    secondaryImage:{
        borderStyle:'solid',
        borderWidth:2,
        borderColor:'white',
        aspectRatio: 0.99,
        width:'100%',
    },


    /*---------------------------------------------------------
                        STYLE PANIER 
    ---------------------------------------------------------*/

    flatlist:{
        width:'100%',
        padding:10
    },

    buttonVider:{
        borderRadius:15,
        margin:10,
    },

    /*---------------------------------------------------------
                        STYLE PANIER ITEM 
    ---------------------------------------------------------*/

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
        alignItems:'center',
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
        width:70,
        height:40,
        borderRadius:15,
        margin:10,       
    },

   

})