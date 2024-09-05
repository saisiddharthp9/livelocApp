// Firebase configuration
import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASTu5gW798H_R3_w14Nu86tK-SGPPv8SI",
  authDomain: "geo-tracking-app-b345f.firebaseapp.com",
  databaseURL:
    "https://geo-tracking-app-b345f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "geo-tracking-app-b345f",
  storageBucket: "geo-tracking-app-b345f.appspot.com",
  messagingSenderId: "23640937370",
  appId: "1:23640937370:web:ec5f70c15d8f31e9bae023",
  measurementId: "G-1NE12D690T",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
