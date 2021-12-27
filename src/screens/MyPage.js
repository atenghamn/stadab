import { NavigationContainer, useNavigation } from '@react-navigation/core';
import React, { useContext} from 'react';
import {Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../../firebase';
import { EmailContext } from '../context/EmailContext';


const MyPage = () => {

    const navigation = useNavigation();

    const { email, changeEmail } = useContext(EmailContext);


    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            console.log("Utloggad", auth.currentUser?.email)
        })
        .catch(error => alert(error.message))
    }
   
    return (
      <View style={styles.component}>
        <Text style={styles.mpTitle}>Mina Sidor</Text>
        {/* <Text style={styles.mpName}>Inloggad som {auth.currentUser?.email}</Text> */}
        <Text style={styles.mpName}>Inloggad som {email}</Text>

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
    mpTitle: {
      marginTop: 60,
      marginBottom: 30,
      padding: 8,   
      backgroundColor: "#000000c0",
      color: "whitesmoke",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
      borderRadius: 10,
      borderColor: '#FAAF3C',
      borderWidth: 2,
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

    mpName: {
      color:"whitesmoke",
      margin: 30,
      fontSize: 16,
    },
    
  });
  
  export default MyPage;