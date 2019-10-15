import firebase from "firebase/app"
import "firebase/storage"
// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyB7uwBn6NNsZlW0SsuOXsduuWb0doVH1gE",
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "entheogen-a76f2.firebaseapp.com",
    databaseURL: "https://entheogen-a76f2.firebaseio.com",
    projectId: "entheogen-a76f2",
    storageBucket: "entheogen-a76f2.appspot.com",
    messagingSenderId: "356566894136",
    appId: "1:356566894136:web:7883d85313c1a75efb88cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;