import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";
import { Link } from "expo-router";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import mapboxgl from "mapbox-gl";
import Navbar from "../Features/Navbar";
import { useRouter } from "expo-router";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2Fpc2lkZGhwOSIsImEiOiJjbTA0eXJhc2cwN2ZoMmpwdjUwdXF5YmN1In0.NzOp3Qbvsq9rLE-7sXgDgw";

const User = () => {
  const mapContainer = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
      setFilteredData([]);
    }
  };

  const handleSelectItem = (item) => {
    setSearchQuery(item);
    setFilteredData([]); // Hide the list after selection.
  };

  const router = useRouter();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.4324, 37.78825], // Initial position [longitude, latitude]
      zoom: 8,
    });

    const marker = new mapboxgl.Marker({ anchor: "center" })
      .setLngLat([-122.4324, 37.78825]) // Position of the marker
      .addTo(map);

    map.resize();

    return () => map.remove();
  }, []);

  return (
    <SafeAreaView style={styles.pageContainer}>
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

      <View>
        <View style={styles.mapContainer} ref={mapContainer}></View>
        <br />
        <View style={styles.searchbox}>
          <TextInput
            style={{
              width: "85%",
              padding: 5,
            }}
            placeholder="Search for Buses"
            value={searchQuery}
            onChangeText={handleSearch}
          />

          <Icon name="search" size={25} style={{ marginLeft: 10 }} />
          {filteredData.length > 0 && (
            <View style={styles.dropdown}>
              <FlatList
                data={filteredData}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleSelectItem(item)}>
                    <Text style={styles.item}>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
              />
            </View>
          )}
        </View>
        <br />
        <View style={styles.buttonContainer}>
          <Button title="View Bus Routes" />
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
          <Button
            title="Confirm Booking"
            onPress={() => router.push("/payment")}
          />
        </View>
      </View>

      <Navbar
        navbarVisible={navbarVisible}
        setNavbarVisible={setNavbarVisible}
      />

      {/* Notification Center Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Notifications</Text>
            <Text style={styles.modalText}>
              - Bus 101 is delayed by 15 minutes.
            </Text>
            <Text style={styles.modalText}>
              - New bus route added for City 4.
            </Text>
            <Text style={styles.modalText}>
              - Your booking has been confirmed.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#ddd",
    padding: 5,
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
  header: {
    flexDirection: "row",
    backgroundColor: "#25292e",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mapContainer: {
    height: 300,
    width: "90%",
    margin: "auto",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    overflow: "hidden",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
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
    borderColor: "#ddd",
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

  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: "#2196F3",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
