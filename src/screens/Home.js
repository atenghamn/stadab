import React from 'react';
import {ImageBackground, StyleSheet, View, } from 'react-native';
;

const App = () => {
    
    const image = {uri: "https://images.unsplash.com/photo-1584792286782-a5dc95dc2250?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"};

    return (
      <View style={styles.component}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            
            
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
  });
  
  export default App;