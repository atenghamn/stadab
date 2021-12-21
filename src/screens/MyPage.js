import { NavigationContainer, useNavigation } from '@react-navigation/core';
import React from 'react';
import {Text, StyleSheet, View, TextInput, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../../firebase';


const MyPage = () => {

    const navigation = useNavigation();

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Mina Sidor")
        })
        .catch(error => alert(error.message))
    }
   
    return (
      <View style={styles.component}>
        <Text>Inloggad som {auth.currentUser?.email}</Text>
        <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
        >
            <Text style={styles.buttonText}>Logga ut</Text>

        </TouchableOpacity>
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
    buttonText: {
        color: 'whitesmoke',
        fontWeight: '700',
        fontSize: 16,

    },

    button: {
        backgroundColor: '#FAAF3C',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    
  });
  
  export default MyPage;