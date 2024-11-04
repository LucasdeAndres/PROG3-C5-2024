import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAUbWMkQqCJ-8lVP2VrvlETWkJUj4avewk",
    authDomain: "demo0001-prog03-2024.firebaseapp.com",
    projectId: "demo0001-prog03-2024",
    storageBucket: "demo0001-prog03-2024.appspot.com",
    messagingSenderId: "956073650207",
    appId: "1:956073650207:web:436a1b1cc515ef8991cd2a"
  };

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();
