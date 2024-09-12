import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIyHwKhf73PMpTiwUiMJ-6Z6o01OllS68",
  authDomain: "myecommerce-8410b.firebaseapp.com",
  projectId: "myecommerce-8410b",
  storageBucket: "myecommerce-8410b.appspot.com",
  messagingSenderId: "974479044532",
  appId: "1:974479044532:web:7dee3d1f36a901a054cce1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth };