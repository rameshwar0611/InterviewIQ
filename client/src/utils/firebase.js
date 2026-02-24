
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-a0f01.firebaseapp.com",
  projectId: "interviewiq-a0f01",
  storageBucket: "interviewiq-a0f01.firebasestorage.app",
  messagingSenderId: "87357668224",
  appId: "1:87357668224:web:5dd491b78b196c6fde1f65"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}