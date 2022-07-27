import firebase from "firebase/app";
import 'firebase/database';
//import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDUpwGKr_foTns0uRtNV0SK2sJWLy0ADzU",
    authDomain: "meuapp-178ba.firebaseapp.com",
    databaseURL: "https://meuapp-178ba-default-rtdb.firebaseio.com",
    projectId: "meuapp-178ba",
    storageBucket: "meuapp-178ba.appspot.com",
    messagingSenderId: "837310853182",
    appId: "1:837310853182:web:74c741b7ae6677ca05616f",
    measurementId: "G-5GWJQV7V2R"
  };

  // Initialize Firebase
  if(!firebase.apps.length){

      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
