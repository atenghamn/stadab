import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
    const [product, setProduct] = useState('Basstäd');
    const [pay, setPay] = useState("Faktura");
    return (
      <View style={styles.component}>
        <Text > Välj en städning </Text>
        <View>
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
    component: {
        flex: 1, 
        justifyContent: 'center',
        color: "whitesmoke",
        alignItems: 'center',
      },
  });
  
  export default App;