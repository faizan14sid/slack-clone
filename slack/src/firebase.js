import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyANxbklPUjexVKV6BE0_6oVye3rQq8qZZA",
  authDomain: "slack-clone-b4852.firebaseapp.com",
  projectId: "slack-clone-b4852",
  storageBucket: "slack-clone-b4852.appspot.com",
  messagingSenderId: "34685044753",
  appId: "1:34685044753:web:93c576d9c26787dbc889b0",
  measurementId: "G-9K94X9TSBQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
