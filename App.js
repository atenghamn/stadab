import Login from './src/screens/LogIn';
import OrderPage from './src/screens/OrderPage';
import About from './src/screens/About';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/screens/Home';


const Stack = createBottomTabNavigator();

export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Hem" component={Home} />
    <Stack.Screen name="Mina Sidor" component={Login} />
    <Stack.Screen name="Beställ" component={OrderPage}  />
    <Stack.Screen name="Om Oss" component={About} />
  </Stack.Navigator>
) 

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({

});
