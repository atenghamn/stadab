import Login from './src/screens/LogIn';
import OrderPage from './src/screens/OrderPage';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

const image = {uri: "https://images.unsplash.com/photo-1584792286782-a5dc95dc2250?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"};
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
     
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <StatusBar style="auto" />
        
        <Text style={styles.title} >STÄDA FINT</Text>
        <Login style={styles.component}/>
        <OrderPage style={styles.component}/>
       
        </ImageBackground>
      
      
       
      </View>
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    justifyContent: "center",
    width: 385

  },
  title: {
    marginTop: 60,
    marginBottom: 30,
    padding: 8,   
    backgroundColor: "#000000c0",
    color: "whitesmoke",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
},

});
