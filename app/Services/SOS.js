import { Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { StyleSheet, Pressable, TouchableOpacity } from "react-native";
// import { Platform } from "react-native";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const s = require("../../styles");

const Distress = () => {
  const [message, setMessage] = useState("");

  const router = useRouter();

  return (
    <View style={s.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Distress Page</Text>
        <Pressable
          onPressIn={() => router.push("/User/userPage")}
          style={{ justifyContent: "center", marginRight: 10 }}
        >
          <Text style={{ fontWeight: "bold" }}>
            Go Back <AntDesign name="rightsquare" size={15} color="black" />
          </Text>
        </Pressable>
      </View>
      <View style={styles.body}>
        <Text style={styles.dtitle}>Enter Distress Message</Text>
        <TextInput
          style={{
            height: 150,
            width: "90%",
            border: "1px solid gray",
            borderRadius: 5,
            marginLeft: 15,
          }}
          multiline={true}
          onChangeText={(text) => setMessage(text)}
        />
        <br />
        <TouchableOpacity
          onPressIn={() => console.log("pressed!")}
          style={styles.submitbtn}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
        </TouchableOpacity>
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
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#25292e",
  },
  dtitle: {
    padding: 10,
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: "bold",
    marginLeft: 5,
  },
  submitbtn: {
    padding: 10,
    alignSelf: "flex-start",
    backgroundColor: "black",
    borderRadius: 5,
    margin: "auto",
  },
  body: {
    alignItems: "center",
  },
});
