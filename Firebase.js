import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAYUkVM43G6g-M9Y_uJlQvI2AX1HbxAHF0",
    authDomain: "mybills-b4ea9.firebaseapp.com",
    databaseURL: "https://mybills-b4ea9.firebaseio.com",
    projectId: "mybills-b4ea9",
    storageBucket: "mybills-b4ea9.appspot.com",
    messagingSenderId: "152767459081",
    appId: "1:152767459081:web:fff6af549ad9e4775bedd8",
    measurementId: "G-K614KM4CX5"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

firebase.analytics();

export default firebase;