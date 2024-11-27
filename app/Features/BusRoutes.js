import React from "react";
import {
  Modal,
  FlatList,
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const BusRoutesModal = ({ isModalVisible, busRoutes, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={onClose}
    >
      <Pressable
        style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onPress={onClose}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Available Bus Routes</Text>
          {busRoutes.length === 0 ? (
            <ActivityIndicator size="large" color="#25292e" />
          ) : (
            <FlatList
              data={busRoutes}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.routeItem}>
                  <Text style={styles.routeText}>Route: {item.Route}</Text>
                  <Text style={styles.routeText}>
                    From: {item.From || "N/A"} - To: {item.To || "N/A"}
                  </Text>
                  <Text style={styles.routeText}>
                    Duration: {item.Duration || "N/A"}
                  </Text>
                  <Text style={styles.routeText}>
                    Conductor: {item.Conductor || "N/A"}
                  </Text>
                  {item.Destinations && item.Destinations.length > 0 && (
                    <View style={styles.destinationsContainer}>
                      <Text style={styles.destinationsTitle}>
                        Destinations:
                      </Text>
                      {item.Destinations.map((dest) => (
                        <Text key={dest.id} style={styles.destinationText}>
                          - {dest.name}: {dest.description}
                        </Text>
                      ))}
                    </View>
                  )}
                </View>
              )}
            />
          )}
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default BusRoutesModal;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20,
    backgroundColor: "#ddd",
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
  destinationsContainer: {
    marginTop: 5,
  },
  destinationsTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },
  destinationText: {
    fontSize: 14,
    color: "#555",
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
