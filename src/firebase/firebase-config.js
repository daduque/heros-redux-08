// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByF_5J4pNNZPryG1xDKuE4yTjAEhswkFI",
  authDomain: "react-auth-app-14089.firebaseapp.com",
  projectId: "react-auth-app-14089",
  storageBucket: "react-auth-app-14089.appspot.com",
  messagingSenderId: "1087135847650",
  appId: "1:1087135847650:web:4b120186a6469c1e527abb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    firebase,
    db,
    googleAuthProvider
}