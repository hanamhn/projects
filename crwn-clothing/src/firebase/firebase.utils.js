import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCffZsrFOd5B-6nvXYhe7XL6jic87b5pIs",
  authDomain: "crwn-db-13e8f.firebaseapp.com",
  databaseURL: "https://crwn-db-13e8f.firebaseio.com",
  projectId: "crwn-db-13e8f",
  storageBucket: "crwn-db-13e8f.appspot.com",
  messagingSenderId: "944376620621",
  appId: "1:944376620621:web:553790bdcc04bfbf161e04",
  measurementId: "G-GV1CZXHNPT",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
