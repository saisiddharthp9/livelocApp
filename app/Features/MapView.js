import { View, StyleSheet, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import React from "react";

// const MAPPLS_API_KEY = "c7850c2e067688d30e2fadcd4793935c";

const MapView = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title> Mappls Map</title>
      <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
      <style type="text/css">
        html, body, #map {
          height: 100%;
          margin: 0;
          padding: 0;
        }
      </style>
      <script src="https://apis.mappls.com/advancedmaps/v1/c7850c2e067688d30e2fadcd4793935c/map_load?v=1.5"></script>
      <script>
        function initialize() {
          var map = new mappls.Map('map', {
            center: { lat: 28.7041, lng: 77.1025 },
            zoom: 12,
          });
        }
        window.onload = initialize;
      </script>
    </head>
    <body>
      <div id="map"></div>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        style={{ borderRadius: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapView;
