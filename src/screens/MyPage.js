import React from 'react';
import {Text, StyleSheet, View, TextInput, Pressable } from 'react-native';
import { auth } from '../../firebase';


const MyPage = () => {
   
    return (
      <View style={styles.component}>
        <Text>Inloggad som {auth.currentUser?.email}</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    component: {
      flex: 1, 
      justifyContent: 'center',
      color: "whitesmoke",
      alignItems: 'center',
      backgroundColor: '#82C7C1', 
    },
    loginTitle: {
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
  
  export default MyPage;