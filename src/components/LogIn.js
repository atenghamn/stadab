import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
    const [roll, setRoll] = useState('Kund');
    return (
      <View >
        <Text > Inloggningsportal </Text>
        <View>
          <TextInput 
            placeholder="Email" />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
          />
          <Picker
            selectedValue={roll}
            onValueChange={currentCurrency => setRoll(currentCurrency)}>
            <Picker.Item label="MED" value="Medarbetare" />
            <Picker.Item label="KUN" value="Kund" />
            <Picker.Item label="ADM" value="Administratör" />
          </Picker>
          <Text>
            Selected: {roll}
          </Text>
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    //Check project repo for styles
  });
  
  export default App;