// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "did2-dc32f.firebaseapp.com",
  projectId: "did2-dc32f",
  storageBucket: "did2-dc32f.appspot.com",
  messagingSenderId: "804510242582",
  appId: "1:804510242582:web:90c29c522b6036e8e12237"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);