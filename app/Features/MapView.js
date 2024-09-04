import { View, StyleSheet } from "react-native";
import { Platform } from "react-native";
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
            center: { lat: 28.7041, lng: 77.1025 }, // Set your desired initial location
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
    <iframe
      src={`data:text/html,${encodeURIComponent(htmlContent)}`}
      width="100%"
      height="50%"
      style={{ borderRadius: 10 }}
    />
  );
};

export default MapView;
