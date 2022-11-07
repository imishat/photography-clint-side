// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAk6TTArs4dsjR1iaVbdl1S8WzWsDt7xck",
    authDomain: "photographer-f5181.firebaseapp.com",
    projectId: "photographer-f5181",
    storageBucket: "photographer-f5181.appspot.com",
    messagingSenderId: "1082228809460",
    appId: "1:1082228809460:web:d4bb8a6eb22a4b1356c8a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;