import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Tendance from './components/Tendance'
import Content from './components/Content'
import Home from './components/Home'
import Details from './components/Details'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppY = () => {
  return (
    <View style={ styles.app }>

      {/* <Home></Home> */}

      <NavigationContainer>

        <Stack.Navigator initialRouteName="Home"
          // Pour cacher le header qui est par défaut
          screenOptions={{headerShown: false}}>

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          
        </Stack.Navigator>

      </NavigationContainer>
      
    </View>
  )
}

export default AppY

const styles = StyleSheet.create({
  app: { flex:1 },
  // tendances: { flex:1,},
  // content: { flex:2.5,},
})