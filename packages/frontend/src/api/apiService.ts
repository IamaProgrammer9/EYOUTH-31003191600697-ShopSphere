import axios from "axios";

axios.defaults.withCredentials = true;

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || "https://nile-bridge-backend.vercel.app",
});

export default api;
