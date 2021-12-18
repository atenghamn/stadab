import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
    const [product, setProduct] = useState('Basstäd');
    const [pay, setPay] = useState("Faktura");
    return (
      <View style={styles.component}>
        <Text style={styles.orderTitle}> Välj en städning </Text>
        <View>
          <Picker style={styles.orderPicker}
            selectedValue={product}
            onValueChange={currentProduct => setProduct(currentProduct)}>
            <Picker.Item label="Basic" value="Basicstädning" />
            <Picker.Item label="Topp" value="Toppstädning" />
            <Picker.Item label="Diamant" value="Diamantstädning" />
            <Picker.Item label="Fönsterputs" value="Fönsterputsning" />
          </Picker>
          <Text>
            Selected: {product}
          </Text>
          <Picker
            selectedValue={pay}
            onValueChange={currentPay=> setPay(currentPay)}>
            <Picker.Item label="Faktura" value="Faktura" />
            <Picker.Item label="Swish" value="Swish" />
            <Picker.Item label="Kort" value="Kort" />
          </Picker>
          <Text>
            Selected: {pay}
          </Text>
        </View>
        <Button style={styles.orderButton}
          onPress={console.log("test")}
          title="Köp"
          accessibilityLabel="Learn more about this purple button"
        />
        
      </View>
    );
  };
  const styles = StyleSheet.create({
    component: {
        flex: 1, 
        justifyContent: 'center',
        color: "whitesmoke",
        backgroundColor: '#82C7C1', 
        alignItems: 'center',
      },
      orderTitle: {
        marginTop: 60,
          marginBottom: 30,
          padding: 8,   
          backgroundColor: "#000000c0",
          color: "whitesmoke",
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
      },
      orderPicker: {

      },
      orderButton: {
        backgroundColor:"#000000c0",

      },
  });
  
  export default App;