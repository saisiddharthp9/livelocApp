import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Header from "./Features/Header";
import { Link } from "expo-router";

const confirmBooking = () => {
  return (
    <View style={{ backgroundColor: "#ddd" }}>
      <Header />
      <View style={styles.container}>
        <Text>Booking confirmed!</Text>
        <Link href="User/userPage">click to go back to your page</Link>
      </View>
    </View>
  );
};

export default confirmBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
