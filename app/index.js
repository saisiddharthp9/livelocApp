import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";
import React, { useState, useEffect } from "react";
import { FontDisplay } from "expo-font";
// import io from "socket.io-client";

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
  // const [socket, setSocket] = useState(null);
  // const [message, setMessage] = useState("");
  // const [chat, setChat] = useState([]);

  // useEffect(() => {
  //   const newSocket = io("http://localhost:3000"); // Adjust the URL to your backend
  //   setSocket(newSocket);

  //   newSocket.on("message", (message) => {
  //     setChat((prevChat) => [...prevChat, message]);
  //   });

  //   return () => newSocket.close();
  // }, []);

  // const sendMessage = () => {
  //   if (socket) {
  //     socket.emit("message", message);
  //     setChat((prevChat) => [...prevChat, message]);
  //     setMessage("");
  //   }
  // };

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: "#ffcc00",
            fontSize: "35px",
            fontWeight: "bold",
            fontStyle: "Italic",
          }}
        >
          BusTracker
        </Text>
        <br />
        <Link href="/login" style={styles.link}>
          Login as a User
        </Link>
        <br />
        <Text style={{ textAlign: "center", color: "#fff" }}>Or</Text>
        <br />
        <Link href="/register" style={styles.link}>
          Sign Up
        </Link>
      </View>
      {/* <View>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={sendMessage} />
        {chat.map((msg, index) => (
          <Text key={index}>{msg}</Text>
        ))}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid white",
  },
});
