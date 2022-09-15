import { View, Text } from 'react-native'
import React,{useState, useContext} from 'react'
import { Button } from "@rneui/themed";
import { Input, Icon } from "@rneui/themed";
import Firebase from '../../../firebaseContext'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//configuration de la navigation 
import { useNavigation } from '@react-navigation/native'
import { styles } from '../theme/ecommerce/styles';
import auth from '@react-native-firebase/auth';


const Inscription = () => {

  const navigation = useNavigation()

  const [affMotDePasse, setaffMotDePasse] = useState(true)

  const [email, setEmail] = useState()
  const [motDePasse, setMotDePasse] = useState()
  
  const firebase = useContext(Firebase)

  //Création de la navigation vers "Inscription"
  const returnToConnexion = () =>{
    navigation.navigate("Connexion")
  }

  const save = () => {
    console.log('first', email , motDePasse) ;
    auth()
    .createUserWithEmailAndPassword(email, motDePasse)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {  
      console.error(error);
    });
  }

  return (
    <View style={styles.inscriptionView} >

      <Input
        placeholder='Votre e-mail'
        onChangeText={value=>setEmail(value)}
        leftIcon={<Icon
                    name='alternate-email'
                    size={20}
                    color='black'/>}          
      />            
                   
      <Input
        placeholder='Mot de passe '
        onChangeText={value=>setMotDePasse(value)}
        secureTextEntry={affMotDePasse}
        leftIcon={<Icon
                    name='lock-outline'
                    size={20}
                    color='black'/>}      

          rightIcon={ <MaterialCommunityIcons
            name={affMotDePasse?'eye-off-outline':'eye-outline'}
            size={20}
            color='black'
            onPress={() => setaffMotDePasse(!affMotDePasse)}/>}     
          />


      <View style={styles.buttonView}>
        <Button 
        containerStyle={styles.signUpButton}
        color={'black'}
        title="Je m'inscris" 
        type="solid"
        onPress={save}/>

      <Text style={styles.textMilieu}>OU</Text>

        <Button 
        containerStyle={styles.loginButton}
        titleStyle={styles.loginButtonText}
        title="Connexion" 
        type="clear"
        onPress={returnToConnexion} />
      </View>

      


    </View>
  )
}

export default Inscription