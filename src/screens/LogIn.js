import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
    const [roll, setRoll] = useState('Kund');
    return (
      <View style={styles.component}>
        <Text style={styles.loginTitle} > Inloggningsportal </Text>
        <View>
          <TextInput 
            placeholder="Email" 
            style ={styles.loginPicker}/>
            
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style ={styles.loginPicker}
          />
          <Picker
            selectedValue={roll}
            onValueChange={currentCurrency => setRoll(currentCurrency)}
            style ={styles.loginPicker}
            >
            <Picker.Item label="STÄDARE" value="Medarbetare" />
            <Picker.Item label="KUND" value="Kund" />
            <Picker.Item label="ADMIN" value="Administratör" />
          </Picker>
          <Text style={styles.loginPicker}>
            Selected: {roll}
          </Text>
        </View>
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
    loginPicker: {
      backgroundColor: '#FAAF3C',
      color: 'whitesmoke',
      margin: 4, 
      width: 200,
      textAlign: "center",
      
    }
  });
  
  export default App;