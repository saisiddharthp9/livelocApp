import { Text, View } from "react-native";
import { Modal } from "react-native-web";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link, useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native-web";
import Icon from "react-native-vector-icons/FontAwesome";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const Navbar = ({ navbarVisible, setNavbarVisible }) => {
  const router = useRouter();

  return (
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
          <Link href="/account" style={styles.navItem}>
            Account Profile <Icon name="user" size={20} />
          </Link>
          <Link href="/favorites" style={styles.navItem}>
            Favorites <MaterialIcons name="stars" size={20} />
          </Link>
          <Link style={styles.navItem} href="/settings">
            Settings <Fontisto name="player-settings" size={20} />
          </Link>
          <Link href="./SOS" style={styles.navItem}>
            SOS <Foundation name="clipboard-notes" size={20} />
          </Link>
          <Link href="/help" style={styles.navItem}>
            Help
          </Link>
          <Text style={styles.navItem}>
            Share <Icon name="share-alt" size={20} />
          </Text>
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
    color: "orange",
  },
  closeNavbar: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 20,
  },
});
