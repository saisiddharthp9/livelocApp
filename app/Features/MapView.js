import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { mappls, mappls_plugin } from "mappls-web-maps";

const mapClassObject = new mappls();
const mapPluginObject = new mappls_plugin();

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
    mapClassObject.initialize("--------Token-------", loadObject, () => {
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
    });
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <View
      id="map"
      style={{ width: "100%", height: "99vh", display: "inline-block" }}
    >
      {isMapLoaded}
    </View>
  );
};

export default MapComponent;
