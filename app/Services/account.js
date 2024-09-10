import { Text, View, StyleSheet } from "react-native";
import Register from "../register";

const s = require("../../styles");

const Account = () => {
  return (
    <View style={s.container}>
      <View style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>
        <Text style={styles.title}>Account Profile</Text>
      </View>
      <View style={styles.photoContainer}>
        <View style={styles.photo}></View>
      </View>
      <View>
        <Text style={styles.details}>Userame :</Text>

        <Text style={styles.details}>Email :</Text>

        <Text style={styles.details}>Occupation :</Text>

        <Text style={styles.details}>Address :</Text>

        <Text style={styles.details}>Phone Number :</Text>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#25292e",
    padding: 10,
  },
  photoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    border: "1px solid gray",
    borderRadius: 50,
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginLeft: 20,
    marginTop: 20,
    justifyContent: "center",
  },
  details: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#25292e",
    padding: 10,
    marginTop: 10,
  },
});
