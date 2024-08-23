import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  Modal,
} from "react-native";
import { Link } from "expo-router";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import mapboxgl from "mapbox-gl";
// import * as Facebook from "expo-auth-session/providers/facebook";

// const MAPPLS_API_KEY = "c7850c2e067688d30e2fadcd4793935c";

// const [fbRequest, fbResponse, fbPromptAsync] = Facebook.useAuthRequest({
//   clientId: "YOUR_FACEBOOK_APP_ID",
//   responseType: ResponseType.Token,
// });

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2Fpc2lkZGhwOSIsImEiOiJjbTA0eXJhc2cwN2ZoMmpwdjUwdXF5YmN1In0.NzOp3Qbvsq9rLE-7sXgDgw";

const User = () => {
  const mapContainer = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [routesModalVisible, setRoutesModalVisible] = useState(false);
  const [routes, setRoutes] = useState([]);
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.4324, 37.78825], // Initial position [longitude, latitude]
      zoom: 8,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([-122.4324, 37.78825]) // Position of the marker
      .addTo(map);

    map.resize();

    return () => map.remove();
  }, []);

  //   const handleViewRoutes = () => {
  //     // Filter routes based on selected source and destination
  //     const filteredRoutes = busRoutes.routes.filter(
  //       (route) =>
  //         (selectedSource ? route.source === selectedSource : true) &&
  //         (selectedDestination ? route.destination === selectedDestination : true)
  //     );
  //     setRoutes(filteredRoutes);
  //     setRoutesModalVisible(true);
  //   };

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

        <View style={styles.searchbox}>
          <TextInput
            style={{
              border: "1px solid black",
              borderRadius: "15px",
              width: "70%",
              padding: 5,
            }}
            placeholder="Search for Buses"
          />
          &nbsp;
          <Icon name="search" size={25} />
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
          <Link href="/payment">
            <Button title="Confirm Booking" />
          </Link>
        </View>
      </View>

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

      {/* Navbar Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={navbarVisible}
        onRequestClose={() => setNavbarVisible(false)}
      >
        <View style={styles.navbarOverlay}>
          <View style={styles.sideNavbar}>
            <TouchableOpacity onPress={() => setNavbarVisible(false)}>
              <Text style={styles.closeNavbar}>Close</Text>
            </TouchableOpacity>
            <Link href="/profile" style={styles.navItem}>
              Account Profile
            </Link>
            <Link href="/favorites" style={styles.navItem}>
              Favorites
            </Link>
            <Link href="/settings" style={styles.navItem}>
              Settings
            </Link>
            <Link href="/help" style={styles.navItem}>
              Help
            </Link>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  pageContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  searchbox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  pickerContainer: {
    marginBottom: 10,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
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

  // Navbar Modal styles
  sideNavbar: {
    width: "80%",
    height: "100%",
    backgroundColor: "white",
    padding: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    marginVertical: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#25292e",
  },
  closeNavbar: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 20,
  },
});
