import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { ToastProvider, useToast } from "react-native-toast-notifications";
import Register from "../register";
import { TextInput } from "react-native-gesture-handler";

const s = require("../../styles");

const Account = () => {
  const [Address, setAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const toast = useToast();

  // useEffect(() => {
  //   toast.show("Hello World");
  // }, []);

  return (
    <ToastProvider>
      <View style={s.container}>
        <View style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>
          <Text style={styles.title}>Account Profile</Text>
        </View>
        <View style={styles.photoContainer}>
          <View style={styles.photo}></View>
        </View>
        <View>
          <Text style={styles.details}>
            Username : <TextInput />
          </Text>

          <Text style={styles.details}>Email : </Text>

          <Text style={styles.details}>Occupation : </Text>

          <Text style={styles.details}>
            Address : <TextInput placeholder="enter address...." />
          </Text>

          <Text style={styles.details}>
            Phone Number : <TextInput placeholder="enter phone no." />
          </Text>
          <br />
          <Button title="Save" style={styles.button} />
        </View>
      </View>
    </ToastProvider>
  );
};

export default Account;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#25292e",
    padding: 10,
  },
  photoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    border: "1px solid gray",
    borderRadius: 50,
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginLeft: 20,
    marginTop: 20,
    justifyContent: "center",
  },
  details: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#25292e",
    padding: 10,
    marginTop: 10,
  },
  button: {
    width: 50,
    marginTop: 20,
  },
});
