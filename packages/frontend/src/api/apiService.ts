import axios from "axios";

axios.defaults.withCredentials = true;

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || "https://nile-bridge-backend.vercel.app",
});

export const reviewServiceApi = axios.create({
    baseURL: import.meta.env.REVIEW_SERVICE_URL || "http://localhost:5200"
})

export default api;
