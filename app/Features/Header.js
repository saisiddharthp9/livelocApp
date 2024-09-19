import React, { useState } from "react";
import { Text, View, Button, StyleSheet, Modal } from "react-native";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import Navbar from "../Features/Navbar";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setNavbarVisible(true)}>
          <Icon name="bars" size={20} color="#fff" />
        </TouchableOpacity>
        <Text
          style={{
            color: "#ffcc00",
            fontSize: "15px",
            fontWeight: "bold",
            fontStyle: "Italic",
          }}
        >
          BusTracker
        </Text>
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
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#25292e",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
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
