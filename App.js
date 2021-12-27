import 'react-native-gesture-handler';
import OrderPage from './src/screens/OrderPage';
import About from './src/screens/About';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/screens/Home';
import LoginScreen from './src/screens/LoginScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyPage from './src/screens/MyPage';

const Tab  = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator 
  screenOptions={({ route }) => ({
    
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Hem') {
        iconName = focused
          ? 'home'
          : 'home-outline';
      } else if (route.name === 'Logga in') {
        iconName = focused ? 'key' : 'key-outline';
      } else if (route.name === 'Beställ') {
        iconName = focused ? 'cart' : 'cart-outline';
      } else if (route.name === 'Om Oss') {
        iconName = focused ? 'people' : 'people-outline';
      } else if (route.name == 'Mina Sidor'){
        iconName = focused ? 'person' : 'person-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#FAAF3C',
    tabBarInactiveTintColor: 'gray',

  })}
       >
    <Tab.Screen name="Hem" component={Home} />
    <Tab.Screen name="Logga in" component={LoginScreen} />
    <Tab.Screen name="Beställ" component={OrderPage} />
    <Tab.Screen name="Mina Sidor" component={MyPage} />
    <Tab.Screen name="Om Oss" component={About} />
   
  </Tab.Navigator>
) 

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#FAAF3C',
    color: 'red',
  },
});
