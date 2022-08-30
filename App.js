import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from './allApps/First';
import NewsScreen from './allApps/AppNews';
import Insta from './allApps/Insta';
import ActionVerite from './allApps/ActionVerite';
import Tuto from './allApps/TutoFlatList';
import Details from './allApps/AppNews/components/Details';
import Home from './allApps/youtube/components/Home';
import Ecommerce from './allApps/E-commerce';
// Importations Redux
import store from './redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex:1}}>
    
    {/* Provider fournit les données qui sont dans le store pour 
    avoir accès aux données tout le temps */}
    <Provider store={store}>

      <NavigationContainer>
          
        <Stack.Navigator initialRouteName="First"
          // Pour cacher le header qui est par défaut
          screenOptions={{headerShown: false}}>


          <Stack.Screen name="First" component={First} />

          {/* News app Screen */}
          <Stack.Screen name="NewsScreen" component={NewsScreen} />
          <Stack.Screen name="Insta" component={Insta} />
          <Stack.Screen name="AppTuto" component={Tuto} />
          <Stack.Screen name="AppEcommerce" component={Ecommerce} />
          {/* <Stack.Screen name="ActionVerite" component={ActionVerite} /> */}

          {/* YOUTUBE */}
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Home" component={Home} />

        </Stack.Navigator>

      </NavigationContainer>

    </Provider>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})