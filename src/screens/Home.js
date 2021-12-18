import React from 'react';
import {ImageBackground, StyleSheet, View, Text} from 'react-native';
import backgroundImage from '../img/jan-kopriva-77La8Of1F9g-unsplash.jpg'

const App = () => {
    

    return (
      <View style={styles.component}>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
            
            <Text style={styles.title} >STÄDA FINT</Text>
             </ImageBackground>

      </View>
    );
  };
  const styles = StyleSheet.create({
    component: {
      flex: 1, 
      justifyContent: 'center',
      color: "whitesmoke",
      alignItems: 'center',
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
  
  export default App;