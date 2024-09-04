import React, { useState, useEffect } from "react";
import { View } from "react-native";
import EntryPoint from "./index";
import firebase from "firebase/app";
import "firebase/auth";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}

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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//connection string for mongodb : mongodb+srv://dbSaiSiddh:<db_password>@cluster0.ql9oi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

export default function App() {
  return (
    <View>
      <EntryPoint /> {/* Entry Point Component */}
    </View>
  );
}
