import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import mapboxgl from "mapbox-gl";

const conductorDashboard = () => {
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
    </SafeAreaView>
  );
};

export default conductorDashboard;

const styles = StyleSheet.create({
  pageContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
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
});
