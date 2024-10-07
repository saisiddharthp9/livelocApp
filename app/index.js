import { StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import React from "react";

export default function EntryPoint() {
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
    boxShadow:
      "rgba(255, 255, 255, 0.12) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.12) 0px 12px 13px, rgba(255, 255, 255, 0.12) 0px -3px 5px;",
  },
});
