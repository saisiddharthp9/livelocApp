import { Text, View } from "react-native";
import React, { useState } from "react";
import { StyleSheet, Button } from "react-native";
import { Platform } from "react-native";

const s = require("../../styles");

const Distress = () => {
  const [message, setMessage] = useState("");

  return (
    <View style={s.container}>
      <View style={styles.title}>
        <Text>Distress Page</Text>
      </View>
      <View></View>
    </View>
  );
};

export default Distress;

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#25292e",
  },
  distressMsg: {
    padding: 20,
  },
});
