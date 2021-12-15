import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
    const [product, setProduct] = useState('Basstäd');
    const [pay, setPay] = useState("Faktura");
    return (
      <View >
        <Text > Välj en städning </Text>
        <View>
          <TextInput 
            placeholder="Email" />
          <Picker
            selectedValue={product}
            onValueChange={currentProduct => setProduct(currentProduct)}>
            <Picker.Item label="Base" value="Basicstädning" />
            <Picker.Item label="Topp" value="Toppstädning" />
            <Picker.Item label="Diam" value="Diamantstädning" />
            <Picker.Item label="Föns" value="Fönsterputsning" />
          </Picker>
          <Text>
            Selected: {product}
          </Text>
          <Picker
            selectedValue={pay}
            onValueChange={currentPay=> setPay(currentPay)}>
            <Picker.Item label="Fakt" value="Basicstädning" />
            <Picker.Item label="Swish" value="Toppstädning" />
            <Picker.Item label="Kort" value="Diamantstädning" />
          </Picker>
          <Text>
            Selected: {pay}
          </Text>
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    //Check project repo for styles
  });
  
  export default App;