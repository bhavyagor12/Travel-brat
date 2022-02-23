import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBBS5acYIvFuHNIw4bmIHNgqLQbqQF4wwA",
  authDomain: "travel-brat.firebaseapp.com",
  projectId: "travel-brat",
  storageBucket: "travel-brat.appspot.com",
  messagingSenderId: "976346193863",
  appId: "1:976346193863:web:f8fe4ccc9c2d07db9f03e2",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};