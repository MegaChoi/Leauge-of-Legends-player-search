import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3KRJ5uXdGSneYp328puwomiSj-aiDkpA",
  authDomain: "reactprojectone-46ed1.firebaseapp.com",
  projectId: "reactprojectone-46ed1",
  storageBucket: "reactprojectone-46ed1.appspot.com",
  messagingSenderId: "186288606317",
  appId: "1:186288606317:web:54475f44d49e2237e74364",
  measurementId: "G-15MGDLZCHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);