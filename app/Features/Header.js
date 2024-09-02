// import React, { useState, useEffect, useRef } from "react";
// import {
//   Text,
//   View,
//   SafeAreaView,
//   Button,
//   StyleSheet,
//   Modal,
//   FlatList,
// } from "react-native";
// import { Link } from "expo-router";
// import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { MaterialIcons } from "@expo/vector-icons";
// import { Picker } from "@react-native-picker/picker";
// import mapboxgl from "mapbox-gl";
// import Navbar from "../Features/Navbar";
// import { useRouter } from "expo-router";

// <View style={styles.header}>
//   <TouchableOpacity onPress={() => setNavbarVisible(true)}>
//     <Icon name="bars" size={20} color="#fff" />
//   </TouchableOpacity>

//   <Text style={{ color: "#fff", fontWeight: "bolder" }}>
//     Welcome, {`( User )`}
//   </Text>
//   <View
//     style={{
//       flexDirection: "row",
//       width: "50px",
//       justifyContent: "space-between",
//     }}
//   >
//     <TouchableOpacity onPress={() => setModalVisible(true)}>
//       <Icon name="bell-o" color="#fff" size={20} />
//     </TouchableOpacity>

//     <TouchableOpacity>
//       <Link href="/login" style={{ color: "#fff", fontWeight: "bolder" }}>
//         <MaterialIcons
//           name="logout"
//           color="#fff"
//           size={20}
//           style={{ marginTop: 3 }}
//         />
//       </Link>
//     </TouchableOpacity>
//   </View>
// </View>;

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: "row",
//     backgroundColor: "#25292e",
//     padding: 10,
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   // Modal styles
//   modalOverlay: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 15,
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
// });
