import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import MapComponent from "../Features/MapView";
import { useRouter } from "expo-router";
import Header from "../Features/Header";
// import * as Location from "expo-location";

const User = () => {
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  // const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    "Bus 101",
    "Bus 102",
    "Bus 103",
    "Express 200",
    "City 300",
    "Night Bus 400",
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(
        data.filter((item) => item.toLowerCase().includes(item.toLowerCase))
      );
    }
  };

  const handleSelectItem = (item) => {
    setSearchTerm(item);
    setFilteredData([]); // Hide the list after selection.
  };

  const router = useRouter();

  return (
    <View style={styles.pageContainer}>
      <Header />
      <br />
      <MapComponent style={styles.mapContainer} />

      <View style={styles.searchbox}>
        <TextInput
          style={{
            width: "100%",
            padding: 5,
          }}
          placeholder="Search for Buses"
          value={searchTerm}
          // onChangeText={handleSearch}
        />

        <Icon name="search" size={25} style={{ marginLeft: 10 }} />
        {filteredData.length > 0 && (
          <View style={styles.dropdown}>
            <Text key={item}>{item}</Text>
          </View>
        )}
      </View>
      <br />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>View Bus Routes</Text>
        </Pressable>
      </View>
      <View style={styles.pickerContainer}>
        <View>
          <Text
            style={{
              color: "#25292e",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            From:
          </Text>
          <Picker>
            <Picker.Item label="Select Source" value="" />
            <Picker.Item label="City 1" value="city2" />
            <Picker.Item label="City 2" value="city2" />
          </Picker>
        </View>
        <View>
          <Text
            style={{
              color: "#25292e",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            To:
          </Text>
          <Picker>
            <Picker.Item label="Select Source" value="" />
            <Picker.Item label="City 3" value="city3" />
            <Picker.Item label="City 4" value="city4" />
          </Picker>
        </View>
      </View>
      <br />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            router.push("../confirm");
          }}
        >
          <Text style={styles.buttonText}>Confirm Booking</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#ddd",
  },
  dropdown: {
    position: "absolute",
    top: 45, // Adjust based on input height
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    zIndex: 1,
  },
  mapContainer: {
    height: 200,
    width: "90%",
    margin: "auto",
    borderRadius: 10,
    overflow: "hidden",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#25292e",
  },
  buttonText: {
    color: "#ffcc00",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  searchbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  pickerContainer: {
    margin: "auto",
    width: "90%",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 10,
  },
});
