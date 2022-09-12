import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDbN_GyWIEBagzpXOmBYrDIimEAF7MtwEU",
    authDomain: "jrhouse-7b172.firebaseapp.com",
    projectId: "jrhouse-7b172",
    storageBucket: "jrhouse-7b172.appspot.com",
    messagingSenderId: "120425681990",
    appId: "1:120425681990:web:0668d033eaabadfca12647"
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();