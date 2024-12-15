import axios from "axios";
import { IoptionAPI } from "./api.interface";

const apiClient = axios.create({
  baseURL: "http://localhost:8080", // Base URL for the API
  headers: {
    "Content-Type": "application/json",
  },
});

// Unified function to handle different HTTP methods
export const apiRequest = async (option: IoptionAPI) => {
  try {
    const response = await apiClient(option);
    return response.data;
  } catch (error) {
    throw new Error(`Error with ${option.method} request: ${error}`);
  }
};
