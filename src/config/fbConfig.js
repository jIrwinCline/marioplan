import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB3ULjCPnl1oyyVwk_bIRqu9M1OqBSOrCA",
    authDomain: "marioplan-821a8.firebaseapp.com",
    databaseURL: "https://marioplan-821a8.firebaseio.com",
    projectId: "marioplan-821a8",
    storageBucket: "marioplan-821a8.appspot.com",
    messagingSenderId: "1421824979",
    appId: "1:1421824979:web:f0d73f72abf226b3d3d526",
    measurementId: "G-LFHN8Y2DS6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const todosRef = firebase.firestore()
// was told to rmove by error/warn
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;