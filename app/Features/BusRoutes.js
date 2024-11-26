import React from "react";
import {
  Modal,
  FlatList,
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

const BusRoutesModal = ({ isModalVisible, busRoutes, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Available Bus Routes</Text>
        <FlatList
          data={busRoutes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.routeItem}>
              <Text style={styles.routeText}>
                Route: {item.attributes.name}
              </Text>
              <Text style={styles.routeText}>
                Source: {item.attributes.source}
              </Text>
              <Text style={styles.routeText}>
                Destination: {item.attributes.destination}
              </Text>
            </View>
          )}
        />
        <Pressable style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default BusRoutesModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    margin: 20,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  routeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  routeText: {
    fontSize: 16,
    color: "#333",
  },
  closeButton: {
    backgroundColor: "#25292e",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: "#ffcc00",
    fontWeight: "bold",
    textAlign: "center",
  },
});
