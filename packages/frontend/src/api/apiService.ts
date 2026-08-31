import axios from "axios";

axios.defaults.withCredentials = true;

let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
    accessToken = token;
};

export const getAccessToken = () => accessToken;

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || "https://nile-bridge-backend.vercel.app",
});

export const reviewServiceApi = axios.create({
    baseURL: import.meta.env.VITE_REVIEW_SERVICE_URL || "https://nile-bridge-reviews-service.vercel.app",
});

reviewServiceApi.interceptors.request.use((config) => {
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

export default api;
