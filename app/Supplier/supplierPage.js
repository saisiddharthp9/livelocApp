import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "../Features/Header";
import MapView from "../Features/MapView";

const Supplier = () => {
  return (
    <View style={styles.pageContainer}>
      <Header />
      <MapView />
      <Text></Text>
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
