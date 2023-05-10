import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.React_App_APIKEY,
  authDomain: "bookstore-15bbd.firebaseapp.com",
  projectId: "bookstore-15bbd",
  storageBucket: "bookstore-15bbd.appspot.com",
  messagingSenderId: "570084528056",
  appId: "1:570084528056:web:c539febb0740c15988894d",
  measurementId: "G-8VWRTWFP86",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
