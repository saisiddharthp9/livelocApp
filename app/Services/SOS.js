import { Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { StyleSheet, Button } from "react-native";
import { Platform } from "react-native";

const s = require("../../styles");

const Distress = () => {
  const [message, setMessage] = useState("");

  return (
    <View style={s.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Distress Page</Text>
      </View>
      <View>
        <Text style={styles.distressMsg}>Enter distress message:</Text>
        <TextInput
          style={{ height: 100, borderColor: "gray", borderWidth: 1 }}
          multiline={true}
          onChangeText={(text) => setMessage(text)}
        />
        <br />
        <Button title="Send Distress" onPress={() => console.log(message)} />
      </View>
    </View>
  );
};

export default Distress;

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 20,
    padding: 10,
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#25292e",
  },
  distressMsg: {
    padding: 20,
  },
});
