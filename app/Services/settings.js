import { Text, View, StyleSheet, Pressable } from "react-native";
// import {
//   Provider as PaperProvider,
//   DefaultTheme,
//   DarkTheme,
// } from "react-native-paper";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const Settings = () => {
  const router = useRouter();
  // const [isDark, setIsDark] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkMode((prevState) => !prevState);
  // };

  // const theme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <View style={styles.SettingContainer}>
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#25292e" }}>
          Settings{" "}
        </Text>
        <Pressable
          onPressIn={() => router.push("/User/userPage")}
          style={{ justifyContent: "center", marginRight: 10 }}
        >
          <Text style={{ fontWeight: "bold" }}>
            Go Back <AntDesign name="rightsquare" size={15} color="black" />
          </Text>
        </Pressable>
      </View>
      <View style={styles.bodyContainer}>
        <Text>Toggle Dark Mode</Text>
      </View>
      {/* <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </Text>

          <TouchableOpacity style={styles.button} onPress={toggleTheme}>
            <Text style={styles.buttonText}>Toggle Theme</Text>
          </TouchableOpacity>
        </View>
      </PaperProvider> */}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  SettingContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ddd",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    border: "1px solid #ddd",
    shadowOffset: 0,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: "#ddd",
  },
  bodyContainer: {
    flex: 1,
  },
});
