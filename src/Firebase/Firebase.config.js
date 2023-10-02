
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEVabCy1LjJPKWXdiide5L9WEiXc1_QUM",
  authDomain: "react-glasses-62766.firebaseapp.com",
  projectId: "react-glasses-62766",
  storageBucket: "react-glasses-62766.appspot.com",
  messagingSenderId: "644089150882",
  appId: "1:644089150882:web:d7e012d4185222675946fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

