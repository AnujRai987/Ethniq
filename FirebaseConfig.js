// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth , getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDehz00J1s6DeZvCprkGVLIjtBlumZpkDI",
  authDomain: "sonorous-bounty-472614-j9.firebaseapp.com",
  databaseURL: "https://sonorous-bounty-472614-j9-default-rtdb.firebaseio.com",
  projectId: "sonorous-bounty-472614-j9",
  storageBucket: "sonorous-bounty-472614-j9.firebasestorage.app",
  messagingSenderId: "1031181700817",
  appId: "1:1031181700817:web:44f0a2029d5d2930533ff0",
  measurementId: "G-7VL521VSHM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= initializeAuth(app, {
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db=getFirestore(app);