import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "../Features/Header";
import MapView from "../Features/MapView";
import { useRouter } from "expo-router";
import { Button } from "react-native-web";

const Supplier = () => {
  const router = useRouter();

  return (
    <View style={styles.pageContainer}>
      <Header />
      <MapView />
      <Button title="View Distress Calls" />
    </View>
  );
};

export default Supplier;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#ddd",
    overflow: "hidden",
  },
});
