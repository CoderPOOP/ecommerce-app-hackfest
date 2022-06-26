import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0lyChJGzZLxNhRA72kVOkSZLPhB4U2oc",
  authDomain: "auth-78d6e.firebaseapp.com",
  projectId: "auth-78d6e",
  storageBucket: "auth-78d6e.appspot.com",
  messagingSenderId: "940638518179",
  appId: "1:940638518179:web:2148ba538d29a3a1167816",
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)