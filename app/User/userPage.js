import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import MapComponent from "../Features/MapView";
import { useRouter } from "expo-router";
import Header from "../Features/Header";
import BusRoutesModal from "../Features/BusRoutes";
import axios from "axios";

const User = () => {
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  // const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [busRoutes, setBusRoutes] = useState([]);

  const busData = [
    "Bus 101",
    "Bus 102",
    "Bus 103",
    "Express 200",
    "City 300",
    "Night Bus 400",
  ];

  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text) {
      const filtered = busData.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  const handleSelectItem = (item) => {
    setSearchTerm(item);
    setFilteredData([]); // Hide the list after selection.
  };

  const router = useRouter();

  useEffect(() => {
    const fetchBusRoutes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/admin/content-manager/collection-types/api::bus-route.bus-route"
        );
        setBusRoutes(response.data.data);
      } catch (error) {
        console.error("Error Fetching Bus Routes!", error);
      }
    };

    fetchBusRoutes();
  }, []);

  return (
    <View style={styles.pageContainer}>
      <Header />
      <View style={{ height: 10 }} />

      <MapComponent style={styles.mapContainer} />

      <View style={styles.searchbox}>
        <TextInput
          style={{
            width: "100%",
            padding: 3,
          }}
          placeholder="Search for Buses"
          value={searchTerm}
          onChangeText={handleSearch}
        />

        <Icon name="search" size={25} style={{ marginLeft: 10 }} />
        {filteredData.length > 0 && (
          <View style={styles.dropdown}>
            {filteredData.map(
              (
                item // Added map function
              ) => (
                <Pressable
                  key={item}
                  onPress={() => handleSelectItem(item)}
                  style={styles.dropdownItem}
                >
                  <Text>{item}</Text>
                </Pressable>
              )
            )}
          </View>
        )}
      </View>
      <View style={{ height: 10 }} />

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>View Bus Routes</Text>
        </Pressable>
      </View>
      <BusRoutesModal
        isModalVisible={isModalVisible}
        busRoutes={busRoutes}
        onClose={() => setModalVisible(false)}
      />
      <View style={styles.pickerContainer}>
        <View>
          <Text style={styles.pickerLabel}>From:</Text>
          <Picker>
            <Picker.Item label="Select Source" value="" />
            <Picker.Item label="City 1" value="city2" />
            <Picker.Item label="City 2" value="city2" />
          </Picker>
        </View>
        <View>
          <Text style={styles.pickerLabel}>To:</Text>
          <Picker>
            <Picker.Item label="Select Source" value="" />
            <Picker.Item label="City 3" value="city3" />
            <Picker.Item label="City 4" value="city4" />
          </Picker>
        </View>
      </View>
      <View style={{ height: 10 }} />

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
    backgroundColor: "#ddd",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    zIndex: 999,
    elevation: 5,
    shadowColor: "#000", // Added shadow for better visibility
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
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
    width: "80%",
    margin: 20,
    marginLeft: 120,
    borderWidth: 2,
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
  pickerLabel: {
    color: "#25292e",
    fontSize: 15,
    fontWeight: "bold",
  },
});
