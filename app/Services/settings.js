import { Text, View, StyleSheet } from "react-native";
import React from "react";

const Settings = () => {
  return (
    <View style={styles.SettingContainer}>
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#25292e" }}>
          Settings{" "}
        </Text>
      </View>
      <View style={styles.bodyContainer}></View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  SettingContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ddd",
  },
  headerContainer: {
    padding: 10,
    border: "1px solid #ddd",
    shadowOffset: 0,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: "#ddd",
  },
  bodyContainer: {
    flex: 1,
  },
});
