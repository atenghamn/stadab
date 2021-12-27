import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState, useContext } from 'react';
import {KeyboardAvoidingView, StyleSheet, View, Text} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../../firebase';
import MyPage from "./MyPage";
import { EmailContext } from '../context/EmailContext';




const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { globalEmail, changeEmail } = useContext(EmailContext);


    const navigation = useNavigation();


    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                console.log("Should change screen");
               // navigation.navigate(MyPage); 
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            changeEmail(email);
            console.log("Registrerade: ", user.globalEmail)
        })
        .catch(error => alert(error.message))
        
    }

     const handleLogin = () => {
       auth
       .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            changeEmail(email);
            console.log("Loggade in med ", globalEmail);
        })
        .catch(error => alert(error.message))
    }
 

    return (
        <KeyboardAvoidingView style={styles.component}
        behavior='padding'>            
            <Text style={styles.loginTitle}>Logga in</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                     value={email}
                     onChangeText={text => setEmail(text)}
                    style={styles.input}
                    >
                </TextInput>
                <TextInput
                    placeholder="Password"
                     value={password}
                     onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                    >
                </TextInput>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
                >
                    <Text style={styles.button}>Logga in</Text>

                </TouchableOpacity>
               
                <TouchableOpacity
                onPress={handleSignUp}
                style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Registrera nytt konto</Text>

                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )};

    const styles = StyleSheet.create({
        component: {
          flex: 1, 
          justifyContent: 'center',
          color: "whitesmoke",
          alignItems: 'center',
          backgroundColor: '#82C7C1', 

        },
        inputContainer: {
            width: '80%',
        },
        
        input: {
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 5,
        },

        buttonContainer: {
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
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

        buttonOutline: {
            backgroundColor: 'whitesmoke',
            marginTop: 5,
            borderColor: '#FAAF3C',
            borderWidth: 2,

        },

        buttonOutlineText: {
            color: '#FAAF3C',
            fontWeight: '700',
            fontSize: 16,
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
            borderRadius: 10,
            borderColor: '#FAAF3C',
            borderWidth: 2,
        },
        
       
      });

export default LoginScreen;