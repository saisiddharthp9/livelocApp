import axios from "axios";
import { STRAPI_API_URL } from "@env";

const api = axios.create({
  baseURL: STRAPI_API_URL,
});

// Example endpoint to get bus locations
export const getBusLocations = async () => {
  try {
    const response = await api.get("/buses");
    return response.data;
  } catch (error) {
    console.error("Error fetching bus locations:", error);
    throw error;
  }
};

export default api;
