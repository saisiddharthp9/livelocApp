import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { mappls, mappls_plugin } from "mappls-web-maps";

const mapClassObject = new mappls();
const mapPluginObject = new mappls_plugin();

const MapComponent = () => {
  const mapRef = useRef(null);
  const [isMapLoaded, setMapLoaded] = useState(false);

  const loadObject = {
    map: true,
    layer: "vector", // Optional Default Vector
    version: "3.4", // // Optional, other version 3.5 also available with CSP headers
    libraries: ["polydraw"], //Optional for Polydraw and airspaceLayers
    plugins: ["direction"], // Optional for All the plugins
  };

  useEffect(() => {
    const initializeMap = async () => {
      await mapClassObject.initialize(
        "c7850c2e067688d30e2fadcd4793935c",
        loadObject,
        () => {
          const newMap = mapClassObject.Map({
            id: "map",
            properties: {
              container: "map",
              center: [28.544, 77.5454],
              zoom: 5,
              traffic: true,
              Geolocation: true,
              clickableIcons: true,
              fullscreenControl: true,
            },
          });

          newMap.on("load", () => {
            setMapLoaded(true);
            addMarker(newMap);
          });
          mapRef.current = newMap;
        }
      );
    };

    initializeMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  const addMarker = (map) => {
    if (isMapLoaded) {
      const coordinates = [28.544, 77.5454];
      const marker = new mapClassObject.Marker({
        position: coordinates,
        title: "New Marker",
      })
        .setLngLat(coordinates)
        .addTo(map);
    }
  };

  return (
    <View id="map" style={styles.map}>
      {isMapLoaded ? null : <LoadingIndicator />}
    </View>
  );
};

const LoadingIndicator = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
);

export default MapComponent;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    margin: "auto",
    border: "2px solid black",
    borderRadius: 10,
    width: "90%",
    height: "99vh",
    display: "inline-block",
  },
  loadingContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});
