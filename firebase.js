// // firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBrELlgx34udawZ5RalxP2p4Ow-eNYz6k",
    authDomain: "selfreka.firebaseapp.com",
    projectId: "selfreka",
    storageBucket: "selfreka.appspot.com",
    messagingSenderId: "102124549847",
    appId: "1:102124549847:web:9100ff80cc480bcc8fa292",
    measurementId: "G-DX43ED575M"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup };