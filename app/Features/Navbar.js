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

  const navigateToAccount = () => {
    router.push("/Services/account");
  };
  const navigateToSettings = () => {
    router.push("/Services/settings");
  };
  const navigateToDistress = () => {
    router.push("/Services/SOS");
  };
  const navigateToHelp = () => {
    router.push("/Services/help");
  };

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
          <TouchableOpacity onPress={navigateToAccount}>
            <Text style={styles.navItem}>
              Account Profile <Icon name="user" size={20} />
            </Text>
          </TouchableOpacity>
          <Link href="/favorites" style={styles.navItem}>
            Favorites <MaterialIcons name="stars" size={20} />
          </Link>
          <TouchableOpacity onPress={navigateToSettings}>
            <Text style={styles.navItem}>
              Settings <Fontisto name="player-settings" size={20} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToDistress}>
            <Text style={styles.navItem}>
              SOS <Foundation name="clipboard-notes" size={20} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToHelp}>
            <Text style={styles.navItem}>
              Help <Foundation name="guide-dog" size={20} />
            </Text>
          </TouchableOpacity>
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
