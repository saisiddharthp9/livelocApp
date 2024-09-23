import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { mappls, mappls_plugin } from "mappls-web-maps";

const mapClassObject = new mappls();
const mapPluginObject = new mappls_plugin();
var pts = [
  { lat: 28.55108, lng: 77.26913 },
  { lat: 28.55106, lng: 77.26906 },
  { lat: 28.55105, lng: 77.26897 },
  { lat: 28.55101, lng: 77.26872 },
  { lat: 28.55099, lng: 77.26849 },
  { lat: 28.55097, lng: 77.26831 },
  { lat: 28.55093, lng: 77.26794 },
  { lat: 28.55089, lng: 77.2676 },
  { lat: 28.55123, lng: 77.26756 },
  { lat: 28.55145, lng: 77.26758 },
  { lat: 28.55168, lng: 77.26758 },
  { lat: 28.55175, lng: 77.26759 },
  { lat: 28.55177, lng: 77.26755 },
  { lat: 28.55179, lng: 77.26753 },
];

const MapComponent = () => {
  const mapRef = useRef(null);
  const [isMapLoaded, setMapLoaded] = useState(false);

  const loadObject = {
    map: true,
    layer: "raster", // Optional Default Vector
    version: "3.0", // // Optional, other version 3.5 also available with CSP headers
    libraries: ["polydraw"], //Optional for Polydraw and airspaceLayers
    plugins: ["direction"], // Optional for All the plugins
  };

  useEffect(() => {
    mapClassObject.initialize(
      "c7850c2e067688d30e2fadcd4793935c",
      loadObject,
      () => {
        const newMap = mapClassObject.Map({
          id: "map",
          properties: {
            center: [28.633, 77.2194],
            zoom: 4,
          },
        });

        newMap.on("load", () => {
          setMapLoaded(true);
        });
        mapRef.current = newMap;
      }
    );
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <View id="map" style={styles.map}>
      {isMapLoaded}
    </View>
  );
};

export default MapComponent;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    margin: "auto",
    borderRadius: 15,
    width: "90%",
    height: 90,
  },
});
