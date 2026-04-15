
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "prepiq2.firebaseapp.com",
  projectId: "prepiq2",
  storageBucket: "prepiq2.firebasestorage.app",
  messagingSenderId: "181064211452",
  appId: "1:181064211452:web:3d2805e5d84112b2313079"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}