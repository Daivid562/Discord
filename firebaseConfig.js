import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
 const firebaseConfig = {
    apiKey: "AIzaSyBt1wwNYoH4sOUU5AguJ1znZQedHURMwPs",
   authDomain: "discord-ece27.firebaseapp.com",
   databaseURL: "https://discord-ece27-default-rtdb.firebaseio.com",
   projectId: "discord-ece27",
   storageBucket: "discord-ece27.appspot.com",
   messagingSenderId: "1072351770449",
   appId: "1:1072351770449:web:3712bd62f13d25b688c570",
 };
 
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);