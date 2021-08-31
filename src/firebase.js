import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8THp32vbLC0w6nQuzVALjbq3aYd7URP8",
    authDomain: "fir-8470d.firebaseapp.com",
    databaseURL:"https://fir-8470d.firebaseio.com",
    projectId: "fir-8470d",
    storageBucket: "fir-8470d.appspot.com",
    messagingSenderId: "777165282933",
    appId: "1:777165282933:web:3b6ccc2471b9173de3e23c",
    measurementId: "G-QEH9G2REHC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };