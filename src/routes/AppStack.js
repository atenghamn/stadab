import Home from '../screens/Home';
import OrderPage from '../screens/OrderPage';
import Login from '../screens/LogIn';
import About from '../screens/About';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from 'react-navigation';

const screens = {
  Order: {
    screen: OrderPage
  },
    Home: {
      screen: Home
    },
    
    Login: {
      screen: Login
    },

    About: {
      screen: About
    },
}

const Stack = createNativeStackNavigator(screens);

export default createAppContainer(Stack);