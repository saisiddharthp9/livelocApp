import { View, Text, StyleSheet } from "react-native";
import Header from "../Features/Header";
import React from "react";

const Help = () => {
  <View style={styles.container}>
    <Text>Help context!</Text>
  </View>;
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ddd",
  },
});
