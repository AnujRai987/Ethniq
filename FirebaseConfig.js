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
  apiKey: "AIzaSyAilvurksFgPX3DN7EeiJAsXd160b6zWL4",
  authDomain: "upbeat-climate-471313-d4.firebaseapp.com",
  projectId: "upbeat-climate-471313-d4",
  storageBucket: "upbeat-climate-471313-d4.firebasestorage.app",
  messagingSenderId: "927932441396",
  appId: "1:927932441396:web:558cce421c5bff704bbb61",
  measurementId: "G-CYZH337V5L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= initializeAuth(app, {
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db=getFirestore(app);