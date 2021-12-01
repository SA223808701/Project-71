import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgcVp3D_ij-sLGhwjr2xlVZiiAxC8qEgM",
    authDomain: "e-ride-1123b.firebaseapp.com",
    projectId: "e-ride-1123b",
    storageBucket: "e-ride-1123b.appspot.com",
    messagingSenderId: "329075838084",
    appId: "1:329075838084:web:281f93dc1380aab29906d1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


