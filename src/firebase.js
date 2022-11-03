import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCp5J3msVpOs5-wXh5dhBT0TlikLLGfpp0",
  authDomain: "comentaki-appdev.firebaseapp.com",
  projectId: "comentaki-appdev",
  storageBucket: "comentaki-appdev.appspot.com",
  messagingSenderId: "572262362655",
  appId: "1:572262362655:web:1a2f94d5c7fe28d3b9ef2a",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
