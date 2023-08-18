import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMIN,
  projectId: process.env.REACT_APP_FIREBASE_PTOJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};
// connect with firebase
const app = initializeApp(firebaseConfig);
//  to login in and register
const auth = getAuth(app);
// data of amazon
const db = getFirestore(app);
export{auth, db};