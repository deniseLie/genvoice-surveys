import axios from "axios";
import { logout } from '../services/authService';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("API_URL ", API_URL);

const apiClient = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type" : "application/json" },
    withCredentials: true,
})

// Add a request interceptor
// apiClient.interceptors.request.use((config) => {
//     console.log("Outgoing request:", config.url);
//     console.log("Authorization Header:", config.headers.Authorization);
//     console.log(localStorage.getItem("authToken"));

//     return config;
// });

// Function : set the Bearer token
export const setAuthToken = (token) => {
    if (token) {
        localStorage.setItem("authToken", token);
        apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
    } else {
        localStorage.removeItem("authToken");
        delete apiClient.defaults.headers["Authorization"];
    }
};

export const apiService = {
    get : (url, params = {})    => apiClient.get(url, { params }),
    post: (url, data)           => apiClient.post(url, data),
    put : (url, data)           => apiClient.put(url, data),
    delete: (url)               => apiClient.delete(url) 
};