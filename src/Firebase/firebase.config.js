// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgGxYKdLgrszRbjY_y-X53mVXKkJoLMqM",
    authDomain: "orbit-zone.firebaseapp.com",
    projectId: "orbit-zone",
    storageBucket: "orbit-zone.appspot.com",
    messagingSenderId: "266009590846",
    appId: "1:266009590846:web:fd24338f28fa1a0f36256f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;