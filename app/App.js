import React, { useState, useEffect } from "react";
import { View } from "react-native";
import EntryPoint from "./index";

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

//connection string for mongodb : mongodb+srv://dbSaiSiddh:<db_password>@cluster0.ql9oi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

export default function App() {
  return (
    <View>
      <EntryPoint /> {/* Entry Point Component */}
    </View>
  );
}
