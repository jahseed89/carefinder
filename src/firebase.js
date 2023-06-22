// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA99M9Pp4mN40yPLI3HkiNZJR6tDAJikXI",
  authDomain: "carefinder-login-firbase.firebaseapp.com",
  projectId: "carefinder-login-firbase",
  storageBucket: "carefinder-login-firbase.appspot.com",
  messagingSenderId: "189598265327",
  appId: "1:189598265327:web:48508e5f4122db42da901a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);