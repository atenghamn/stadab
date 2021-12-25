import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBroom } from '@fortawesome/free-solid-svg-icons'

const App = () => {
    
    return (
      <View style={styles.component}>
        <Text style={styles.title} >STÄDA FINT</Text>    
             <FontAwesomeIcon icon={faBroom} size={250} color={'whitesmoke'}/>
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
    image: {
        flex: 1,
        justifyContent: "center",
        width: 385
      },
      title: {
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
  
  export default App;