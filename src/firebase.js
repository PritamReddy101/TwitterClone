import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlzIUZaZsgsN9XJ-WZLYK3t0tErAqGYME",
  authDomain: "twitter-clone-8c267.firebaseapp.com",
  projectId: "twitter-clone-8c267",
  storageBucket: "twitter-clone-8c267.appspot.com",
  messagingSenderId: "135557210030",
  appId: "1:135557210030:web:e3fe66b492dea0c63f723f",
  measurementId: "G-YVYLXLSV8J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;