import { Text, View, StyleSheet } from "react-native";
import React from "react";

const Share = () => {
  <View style={StyleSheet.shareContainer}>
    <Text>Help Page</Text>
  </View>;
};

export default Share;

const styles = StyleSheet.create({
  shareContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ddd",
  },
});
