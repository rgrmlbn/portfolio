// services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // e.g. http://localhost:8080/api
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;