import firebase from "firebase";
import 'firebase/auth';
export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBd934XmAmJLJwVxCNydef7jUxBunVvyeo",
    authDomain: "pricecrashdeals-45309.firebaseapp.com",
    databaseURL: "https://pricecrashdeals-45309.firebaseio.com",
    projectId: "pricecrashdeals-45309",
    storageBucket: "pricecrashdeals-45309.appspot.com",
    messagingSenderId: "1005366834793",
    appId: "1:1005366834793:web:f6855d870a1ebd648254f8",
    measurementId: "G-5P0FFEQK0J"
});

const db = firebaseApp.firestore();
export default db;
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();



