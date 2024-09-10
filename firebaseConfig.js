import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASTu5gW798H_R3_w14Nu86tK-SGPPv8SI",
  authDomain: "geo-tracking-app-b345f.firebaseapp.com",
  databaseURL:
    "https://geo-tracking-app-b345f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "geo-tracking-app-b345f",
  storageBucket: "geo-tracking-app-b345f.appspot.com",
  messagingSenderId: "23640937370",
  appId: "1:23640937370:web:bd1202d8a3ec87b5bae023",
  measurementId: "G-CPF212FJZ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
