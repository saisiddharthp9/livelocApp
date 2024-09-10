import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { WebView } from "react-native-webview";

const MapComponent = () => {
  const mapHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mappls Map</title>
        <script src="https://apis.mappls.com/advancedmaps/v1/c7850c2e067688d30e2fadcd4793935c/map_sdk?v=3.0&layer=vector"></script>
    </head>
    <body>
        <div id="map" style="width: 100%; height: 100vh;"></div>
        <script>
            var map = new Mappls.Map("map", {
                center: [77.1025, 28.7041],
                zoom: 12
            });
        </script>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      {Platform.OS === "web" ? (
        <iframe srcDoc={mapHtml} style={styles.map} title="Mappls Map" />
      ) : (
        <WebView
          originWhitelist={["*"]}
          source={{ html: mapHtml }}
          style={styles.map}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapComponent;
