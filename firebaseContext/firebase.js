import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth"
// Début POO avec JS 
// (voir index à la racine du projet pour l'envoyer dans toue l'app)
class Firebase {

    firestore ;
    auth ;
    
    constructor() {

        this.firestore = firestore() ;
        this.auth = auth() ;

    }

    // Récupère les catégories
    getCategories = () => this.firestore.collection('Categories').get() ;
    // getCategories = () => {
    //     return this.firestore.collection("Categories")
    // }

    // Récupère les articles
    getArticles = () => this.firestore.collection('Articles').get() ;

    getArticleById = (id) => this.firestore.collection('Articles').doc(id).get() ;

}

export default Firebase