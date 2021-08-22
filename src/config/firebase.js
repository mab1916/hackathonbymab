import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCDKA0YvkJXb0PyCNT3np1XbsT3s-i1Auw",
    authDomain: "hackathonbymab-ba890.firebaseapp.com",
    projectId: "hackathonbymab-ba890",
    storageBucket: "hackathonbymab-ba890.appspot.com",
    messagingSenderId: "588715267431",
    appId: "1:588715267431:web:19434380b848b91d0dcbc2",
    measurementId: "G-0H2V996SB2"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
// export const storage = firebase.storage();
export const auth = firebase.auth();
