import { Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";
import Header from "./Features/Header";
import { useRouter } from "expo-router";

const confirmBooking = () => {
  const router = useRouter();

  return (
    <View style={{ backgroundColor: "#ddd" }}>
      <Header />
      <View style={styles.container}>
        <Text>Booking confirmed!</Text>
        <Pressable
          onPress={() => {
            router.push("/User/userPage");
          }}
        >
          <br />
          <Text style={{ fontWeight: "bold", color: "blue" }}>
            --{`>`}Click to go back
          </Text>
        </Pressable>
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
