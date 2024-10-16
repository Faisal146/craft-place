// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoahQ1-HBD5HKZ5ySG9R_3VvbZ8Icq-9k",
  authDomain: "craft-place.firebaseapp.com",
  projectId: "craft-place",
  storageBucket: "craft-place.appspot.com",
  messagingSenderId: "1603884389",
  appId: "1:1603884389:web:f4d553cf88f50ede503d8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth