import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyAOLzY7YCGCcsScmFr-Jeesbp-YxSBP7Kc",
  authDomain: "fir-react-3b429.firebaseapp.com",
  projectId: "fir-react-3b429",
  storageBucket: "fir-react-3b429.appspot.com",
  messagingSenderId: "736290055162",
  appId: "1:736290055162:web:af6d6049ee3a06efbeba43",
};

// Initialize Firebase app is firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)//give access to my authentication
export const firestore = getFirestore(app)//will give access to my firestore
export const storage = getStorage(app)