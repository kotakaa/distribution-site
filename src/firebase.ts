import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-storage";

var firebaseConfig = {
    apiKey: "AIzaSyAijYpfMBrmGgVHwJK-RaJsHDPRXaSloxc",
    authDomain: "distribution-site-2e39c.firebaseapp.com",
    databaseURL: "https://distribution-site-2e39c.firebaseio.com",
    projectId: "distribution-site-2e39c",
    storageBucket: "distribution-site-2e39c.appspot.com",
    messagingSenderId: "1068679779194",
    appId: "1:1068679779194:web:0dd6428f103667e475bcc3",
    measurementId: "G-Q9RDV03JN3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;