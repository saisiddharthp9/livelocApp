import React from "react";
import { View } from "react-native";
import EntryPoint from "./app/index";

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

export default function App() {
  return (
    <View>
      <EntryPoint />
    </View>
  );
}
