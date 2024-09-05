import { Text, View, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import MapView from "../Features/MapView";
import { Pressable, Button } from "react-native";
const conductorDashboard = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setNavbarVisible(true)}>
          <Icon name="bars" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontWeight: "bolder" }}>
          Welcome, {`( User )`}
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "50px",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name="bell-o" color="#fff" size={20} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href="/login" style={{ color: "#fff", fontWeight: "bolder" }}>
              <MaterialIcons
                name="logout"
                color="#fff"
                size={20}
                style={{ marginTop: 3 }}
              />
            </Link>
          </TouchableOpacity>
        </View>
      </View>

      <MapView />

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Enter the Starting Point"
          value={from}
          onChangeText={setFrom}
          style={styles.formInput}
        />

        <TextInput
          placeholder="Enter the Destination"
          value={to}
          onChangeText={setTo}
          style={styles.formInput}
        />
      </View>
      <Pressable>
        <Button title="Start Journey" />
      </Pressable>
    </View>
  );
};

export default conductorDashboard;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ddd",
    padding: 5,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#25292e",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  formContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    border: 1,
    borderRadius: 5,
    padding: 5,
  },
  formInput: {
    padding: 5,
    width: "60%",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
