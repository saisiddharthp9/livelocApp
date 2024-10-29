import { StyleSheet, Text, View, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("User");

  const router = useRouter();

  const handleRegister = async () => {
    if (password != confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const userInfo = {
        name,
        email,
        password,
        role,
      };

      await AsyncStorage.setItem(`user_${email}`, JSON.stringify(userInfo));
      Alert.alert("Success", "Registration successful!");
      router.push("./login"); // Navigate to login page after registration

      const result = await AsyncStorage.getItem(`user_${email}`);
      console.log("Stored User info: ", result); // To check if data is saved properly. Should return the same object as userInfo above.
    } catch (error) {
      console.error("Failed to save user info:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          border: "2px solid #25292e",
          borderRadius: "10px",
          padding: 50,
        }}
      >
        <Text
          style={{
            color: "#25292e",
            fontSize: "35px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {`>`} Register {`<`}
        </Text>
        <br />
        <Text
          style={{ color: "#25292e", fontSize: "20px", fontWeight: "bold" }}
        >
          Enter your details below:
        </Text>
        <br />
        <Text
          style={{ color: "#25292e", fontSize: "15px", fontWeight: "bold" }}
        >
          Name:
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
            borderRadius: 5,
          }}
          placeholder=" Enter your Name pls!"
          value={name}
          onChangeText={setName}
        />

        <Text
          style={{ color: "#25292e", fontSize: "15px", fontWeight: "bold" }}
        >
          Email:{" "}
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
            borderRadius: 5,
          }}
          value={email}
          placeholder=" Enter your email"
          onChangeText={setEmail}
        />
        <Text
          style={{ color: "#25292e", fontSize: "15px", fontWeight: "bold" }}
        >
          Password:{" "}
        </Text>
        <TextInput
          secureTextEntry={true}
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
            borderRadius: 5,
          }}
          value={password}
          placeholder=" Enter Password"
          onChangeText={setPassword}
        />
        <Text
          style={{ color: "#25292e", fontSize: "15px", fontWeight: "bold" }}
        >
          Confirm Password:{" "}
        </Text>
        <TextInput
          secureTextEntry={true}
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
            borderRadius: 5,
          }}
          placeholder=" Enter Password again pls!"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Text
          style={{ color: "#25292e", fontSize: "15px", fontWeight: "bold" }}
        >
          What is your Role:
        </Text>
        <Picker
          selectedValue={role}
          onValueChange={(itemValue) => setRole(itemValue)}
        >
          <Picker.Item label="User" value="User" />
          <Picker.Item label="Conductor" value="Conductor" />
          <Picker.Item label="Depot Manager" value="Depot Manager" />
          <Picker.Item label="Supplier" value="Supplier" />
          <Picker.Item label="Other" value="other" />
        </Picker>
        <br />
        <TouchableOpacity
          style={{
            backgroundColor: "#4CAF50",
            padding: 10,
            borderRadius: 5,
            marginBottom: 10,
          }}
          onPress={handleRegister}
        >
          <Text style={{ color: "#fff", fontSize: "2", textAlign: "center" }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center", // Centering the text horizontally and vertically in the SafeAreaView.
  },
});
