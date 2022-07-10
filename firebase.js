// Import the functions you need from the SDKs you need
// import firebase from 'firebase';
// v9 compat packages are API compatible with v8 code
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzU-yM69gaejb_WI7OnDNsn081jfe-URw",
  authDomain: "bongo-e-food.firebaseapp.com",
  projectId: "bongo-e-food",
  storageBucket: "bongo-e-food.appspot.com",
  messagingSenderId: "328022015534",
  appId: "1:328022015534:web:3573f89335313d9ae569bf"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;