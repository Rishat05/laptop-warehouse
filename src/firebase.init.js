// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEnExwqtqwKs7LPT8l1uFH7VmP81BMBWA",
    authDomain: "rishat-laptop-store.firebaseapp.com",
    projectId: "rishat-laptop-store",
    storageBucket: "rishat-laptop-store.appspot.com",
    messagingSenderId: "936842557160",
    appId: "1:936842557160:web:3cd885615ed2cfdc9cbb5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;