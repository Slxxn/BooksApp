import { ADD_PANIER, REMOVE_PANIER, REMOVE_ONE_PANIER } from "../type";
import { existItem } from "../../common/fonctions";

// Initialisation de la valeur du State dans le Store

const initStatePanier = [] ;

// export default dataCategorie
export default function ( state = initStatePanier , action ) {

    if ( action.type == ADD_PANIER ) {
        
        // return State actualisé ;

        return !existItem( state, action.payload.id ) ? [ ...state, action.payload ] : state ;

        // if( state.find( item => item.id == action.payload.id ) == undefined ) {
        // console.log( state.find( item => item.id == action.payload.id ) )

        //     // Permet d'ajouter une caté avec le destructuring
        //     return [ ...state, action.payload ] ;
        //     // action.payload stocké dans le dispatch

        // }else{

        //     return state
            
        // }
        
    } else if ( action.type == REMOVE_PANIER ){ //vider mon panier
        
        // retourne State initial
        return action.payload;

    }else if ( action.type == REMOVE_ONE_PANIER ){ // supprimer 1 élément du panier
        // Rechercher la position d'un element
        return state.filter(item => item.id != action.payload.id)

    }else {
        
        // retourne State initial
        return state ;

    }
      

    // Équivalent à au-dessus

    // switch( action.type == ADD_CATEGORIE ){

    //     case ADD_CATEGORIE :{
    //         return nextState ;
    //     }
    //     default :
    //             return state ;
    // }

}