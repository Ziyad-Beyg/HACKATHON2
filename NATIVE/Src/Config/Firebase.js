import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"

const firebaseApp = initializeApp({
    apiKey: "AIzaSyArXIAX9KllEYmgkEqnRo9uzU_YafA1Qho",
    authDomain: "khaana-sab-k-liye.firebaseapp.com",
    projectId: "khaana-sab-k-liye",
    storageBucket: "khaana-sab-k-liye.appspot.com",
    messagingSenderId: "370466219040",
    appId: "1:370466219040:web:ab6c035f817902f4274845",
    measurementId: "G-ZE5PXQ5X52"
});

const auth =  getAuth();
export{
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
}