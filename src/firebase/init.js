import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAS7rybtVWyXlHozNOdXP-6AcrwM2LvbzY",
  authDomain: "group-by-319f5.firebaseapp.com",
  databaseURL: "https://group-by-319f5-default-rtdb.firebaseio.com",
  projectId: "group-by-319f5",
  storageBucket: "group-by-319f5.appspot.com",
  messagingSenderId: "927841876779",
  appId: "1:927841876779:web:8cfb17606d5f0aaed3dd7e"
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
