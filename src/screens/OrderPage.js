import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import reactDom from 'react-dom';

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
          <Text style={styles.orderDisplayText}>
            Du har valt paketet: {product}
          </Text>
          <Picker
            style={styles.orderPicker}
            selectedValue={pay}
            onValueChange={currentPay=> setPay(currentPay)}>
            <Picker.Item label="Faktura" value="Faktura" />
            <Picker.Item label="Swish" value="Swish" />
            <Picker.Item label="Kort" value="Kort" />
          </Picker>
          <Text style={styles.orderDisplayText}>
            Betalningsmetod: {pay}
          </Text>
        </View>
        <Pressable style={styles.orderButton}
          onPress={console.log("Användaren valde " + product.toLowerCase() + " och vill betala med " + pay.toLowerCase())}
          title="Köp"
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={styles.orderButtonText}>Köp</Text>
        </Pressable>
        
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
          backgroundColor: '#FAAF3C',
          color: 'whitesmoke',
          margin: 4, 
          width: 200,
      },
      orderDisplayText: {
        color: '#FAAF3C',
        backgroundColor: 'whitesmoke',
        margin: 4, 
        width: 200,
        textAlign: "center",
      },
      orderButton: {
        backgroundColor:"#7FAED4",
        width: 100,
      },
      orderButtonText: {
        color: 'whitesmoke',
        textAlign: 'center',
        padding: 4,
        margin: 4,
      }
  });
  
  export default App;