import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { CheckBox } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Facebook from "expo-auth-session/providers/facebook";
import { ResponseType } from "expo-auth-session";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  // const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [fbRequest, fbResponse, fbPromptAsync] = Facebook.useAuthRequest({
    clientId: "529598876172253",
    responseType: ResponseType.Token,
    // permissions: ["public_profile", "email"],
  });

  //facebook login
  useEffect(() => {
    if (fbResponse?.type === "success") {
      const { access_token } = fbResponse.params;
      handleFacebookLoginSuccess(access_token);
    }
  }, [fbResponse]);

  useEffect(() => {});

  const handleFacebookLoginSuccess = async (accessToken) => {
    console.log("Facebook login successful. Access Token:", accessToken);
    await AsyncStorage.setItem("facebookAccessToken", accessToken);

    // Navigate based on role or directly to the user page
    router.push("/User/userPage");
  };

  const handleFacebookLogin = () => {
    fbPromptAsync();
  };

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const userInfo = await AsyncStorage.getItem(`user_${email}`);
        if (userInfo) {
          const { email, password } = JSON.parse(userInfo);
          setEmail(email);
          setPassword(password);
        }
      } catch (error) {
        console.error("Failed to load user info:", error);
      }
    };

    loadUserInfo();
  }, []);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log("Google login successful:", response);
    navigateBasedOnRole();
  };

  const handleLogin = async () => {
    try {
      const userInfoString = await AsyncStorage.getItem(`user_${email}`);
      if (!userInfoString) {
        Alert.alert("Error", "No user found with this email");
        return;
      }

      const userInfo = JSON.parse(userInfoString);

      if (userInfo.password === password) {
        Alert.alert("Success", `Welcome, ${userInfo.role}`);
        // Navigate based on user role
        if (userInfo.role === "User") {
          router.push("/User/userPage");
        } else if (userInfo.role === "Conductor") {
          router.push("/Conductor/conductorPage");
        } else if (userInfo.role === "Depot Manager") {
          router.push("/Depot Manager/depotPage");
        } else if (userInfo.role === "Supplier") {
          router.push("/Supplier/supplierPage");
        } else {
          router.push("/otherHome");
        }
      } else {
        Alert.alert("Error", "Incorrect password");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}> Login to Enter</Text>
        <br />
        <br />
        <View style={styles.inputContainer}>
          <Text style={styles.textlabel}>Email:</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textlabel}>Password:</Text>
          <TextInput
            secureTextEntry
            placeholder="Enter your Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <Text>Remember Me</Text>&nbsp;
          <CheckBox value={isChecked} onValueChange={toggleCheckbox} />
        </View>

        <View style={styles.finalButtonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            Login
          </TouchableOpacity>
          &nbsp;
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/register")}
          >
            Create Account
          </TouchableOpacity>
        </View>
        <br />
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity onPress={handleFacebookLogin}>
            <Icon
              name="facebook-square"
              size={20}
              color="blue"
              style={{
                border: "2px solid blue",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGoogleLoginSuccess}>
            <Icon
              name="google"
              size={20}
              color="#900"
              style={{
                border: "2px solid #900",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    borderRadius: 10,
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  title: {
    color: "#25292e",
    fontWeight: "bold",
    fontSize: 25,
  },
  inputContainer: {
    marginBottom: 10,
  },
  textlabel: {
    fontSize: 15,
    color: "#25292e",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#25292e",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "100%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "100%",
  },
  pickerContainer: {
    marginBottom: 20,
  },
  button: {
    border: "1px solid #25292e",
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
  },
  footer: {
    fontSize: 25,
    color: "#25292e",
    fontWeight: "bold",
  },
  finalButtonsContainer: {
    flexDirection: "row",

    justifyContent: "space-between",
  },
});
