import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBYygseIoRaqtEYeN7oA3GHpkfRCmHoo6k",
  authDomain: "kfc-clone-e5378.firebaseapp.com",
  projectId: "kfc-clone-e5378",
  storageBucket: "kfc-clone-e5378.appspot.com",
  messagingSenderId: "282486693333",
  appId: "1:282486693333:web:4d10ced2268a536768b15c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {
    app,
    auth
}