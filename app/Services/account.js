import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { ToastProvider, useToast } from "react-native-toast-notifications";
import Register from "../register";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import AntDesign from "@expo/vector-icons/AntDesign";

const s = require("../../styles");

const Account = () => {
  const [Address, setAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const toast = useToast();
  const router = useRouter();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // useEffect(() => {
  //   toast.show("Hello World");
  // }, []);

  return (
    <ToastProvider>
      <View style={s.container}>
        <View
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>Account Profile</Text>
          <Pressable
            onPressIn={() => router.push("/User/userPage")}
            style={{ justifyContent: "center", marginRight: 10 }}
          >
            <Text style={{ fontWeight: "bold" }}>
              Go Back <AntDesign name="rightsquare" size={15} color="black" />
            </Text>
          </Pressable>
        </View>
        <View style={styles.photoContainer}>
          <View style={styles.photo}>
            {profileImage && <Image source={{ uri: profileImage }} />}
          </View>
          <br />
          <Pressable
            onPress={pickImage}
            style={{ backgroundColor: "black", borderRadius: 5 }}
          >
            <Text style={{ color: "white", padding: 5, fontWeight: "bold" }}>
              Edit Image
            </Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.details}>
            Username : <TextInput />
          </Text>

          <Text style={styles.details}>Email : </Text>

          <Text style={styles.details}>Occupation : </Text>
          <Text style={styles.details}>
            Address : <TextInput placeholder="enter address...." />
          </Text>

          <Text style={styles.details}>
            Phone Number : <TextInput placeholder="enter phone no." />
          </Text>
          <br />
          <View style={{ alignItems: "center" }}>
            <Pressable style={styles.button}>
              <Text style={{ color: "white", padding: 5, fontWeight: "bold" }}>
                Save
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ToastProvider>
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
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width: 200,
    height: 200,
    borderRadius: "50%",
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
  button: {
    width: "50%",
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: "black",
    borderRadius: 5,
    alignItems: "center",
  },
});
