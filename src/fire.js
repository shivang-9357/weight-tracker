import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAbGO5eCP8CbNeuUoT-TMptFB7upz6lSWw",
    authDomain: "weight-tracker-9c5f2.firebaseapp.com",
    projectId: "weight-tracker-9c5f2",
    storageBucket: "weight-tracker-9c5f2.appspot.com",
    messagingSenderId: "617443987343",
    appId: "1:617443987343:web:04b0f45f69e48e1379c5fa"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;