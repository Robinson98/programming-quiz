import firebase from 'firebase'
// import 'firebase/firestore'
// import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBW_Yz9q3ECfQEcVVvp8BiFDLVYnYbYAu0",
    authDomain: "testingapp-5f2e6.firebaseapp.com",
    databaseURL: "https://testingapp-5f2e6.firebaseio.com",
    projectId: "testingapp-5f2e6",
    storageBucket: "testingapp-5f2e6.appspot.com",
    messagingSenderId: "708553436182",
    appId: "1:708553436182:web:94d60647796687421a1937",
    measurementId: "G-4PJ0K4VW2D"
  };
// Initialize Firebase
export let configure = firebase.initializeApp(firebaseConfig);
// firebase.firestore();
// firebase.analytics();

export default firebase;