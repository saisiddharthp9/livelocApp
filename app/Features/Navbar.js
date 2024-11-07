import { Text, View, StyleSheet, Pressable } from "react-native";
import { Modal } from "react-native-web";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { Foundation } from "@expo/vector-icons";

const Navbar = ({ navbarVisible, setNavbarVisible }) => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={navbarVisible}
      onRequestClose={() => setNavbarVisible(false)}
    >
      <View style={styles.navbarOverlay}>
        <View style={styles.sideNavbar}>
          <TouchableOpacity onPress={() => setNavbarVisible(false)}>
            <Text style={styles.closeNavbar}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo("/Services/account")}>
            <Text style={styles.navItem}>
              Account Profile <Icon name="user" size={20} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setNavbarVisible(false);
              navigateTo("/Services/favorites");
            }}
          >
            <Text style={styles.navItem}>
              Favorites <MaterialIcons name="stars" size={20} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo("/Services/settings")}>
            <Text style={styles.navItem}>
              Settings <Fontisto name="player-settings" size={20} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo("/Services/SOS")}>
            <Text style={styles.navItem}>
              SOS <Foundation name="clipboard-notes" size={20} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo("/Services/help")}>
            <Text style={styles.navItem}>
              Help <Feather name="help-circle" size={20} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo("/Services/share")}>
            <Text style={styles.navItem}>
              Share <Icon name="share-alt" size={20} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  // Navbar Modal styles
  sideNavbar: {
    width: "80%",
    height: "100%",
    backgroundColor: "#E1E1E1",
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
    color: "#f88d5e",
  },
  closeNavbar: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 15,
  },
});
