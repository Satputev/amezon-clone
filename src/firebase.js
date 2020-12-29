import * as firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDqyOLHk2gxBB8fqfyDPF6Upk8xIZeK91M",
  authDomain: "amezon-clone-58bc1.firebaseapp.com",
  databaseURL: "https://amezon-clone-58bc1.firebaseio.com",
  projectId: "amezon-clone-58bc1",
  storageBucket: "amezon-clone-58bc1.appspot.com",
  messagingSenderId: "884036964515",
  appId: "1:884036964515:web:79897797ffc1dd6037ef16",
  measurementId: "G-CDV6J009SW",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
