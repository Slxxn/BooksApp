import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from './allApps/First';
import News from './allApps/AppNews';
import Insta from './allApps/Insta';
import ActionVerite from './allApps/ActionVerite';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex:1}}>

    <NavigationContainer>
        
      <Stack.Navigator initialRouteName="First"
        // Pour cacher le header qui est par défaut
        screenOptions={{headerShown: false}}>


        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Insta" component={Insta} />
        <Stack.Screen name="ActionVerite" component={ActionVerite} />

      </Stack.Navigator>

    </NavigationContainer>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})