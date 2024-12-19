import axios from "axios";
import { IoptionAPI } from "./api.interface";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const apiRequest = async (option: IoptionAPI) => {
  try {
    const token = localStorage.getItem("token");

    if (token && option.isAuth) {
      option.headers = {
        ...option.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    const response = await apiClient(option);
    return response.data;
  } catch (error: any) {
    if (error && error.status == 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    throw new Error(`Error with ${option.method} request: ${error}`);
  }
};
