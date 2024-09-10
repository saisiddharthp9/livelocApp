import { Text, View, StyleSheet } from "react-native";
import Register from "../register";

const s = require("../../styles");

const Account = () => {
  return (
    <View style={s.container}>
      <View style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>
        <Text style={styles.title}>Account Profile</Text>
      </View>
      <View>
        <Text>Userame :</Text>
        <Text>Email :</Text>
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
});
