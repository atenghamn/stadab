import * as firebase from "firebase";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeT9QkDhS8V9urksK7I2DULc--u4UVxDs",
  authDomain: "stadafintauth.firebaseapp.com",
  databaseURL: "https://stadafintauth-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "stadafintauth",
  storageBucket: "stadafintauth.appspot.com",
  messagingSenderId: "713343500892",
  appId: "1:713343500892:web:c41ff1c7d26d40878f9c99"

};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
  
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();


export {auth }
