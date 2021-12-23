import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import teamImage from "../img/gil-ribeiro-3hO8igCybds-unsplash.jpg";


const App = () => {


    return (
        <View style={styles.component}>
            <Text style={styles.aboutTitle}>Om Oss</Text>
            <Image 
            style={styles.teamImages}
            source={teamImage}
            />
            <Text style={styles.aboutText}> 
            Städa Fint är ett familjeägt företag som i dagsläget har 19 anställda och omsätter 30 miljoner.
            Vi erbjuder en rad olika tjänster inom städ och lokalvård, både till privata kunder, företag och offentlig sektor.
            </Text>
            


        </View>
    )};

    const styles = StyleSheet.create({
        component: {
          flex: 1, 
          justifyContent: 'center',
          color: "whitesmoke",
          alignItems: 'center',
          backgroundColor: '#82C7C1', 

        },
        teamImages: {
            flex: 1,
            justifyContent: "center",
            width: 385
          },
          aboutTitle: {
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
        aboutText: {
            marginTop: 60,
            marginBottom: 30,
            padding: 8,   
            color: "whitesmoke",
            textAlign: "center",
        }
      });

export default App;