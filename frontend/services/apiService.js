import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const apiClient = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type" : "application/json" },
    withCredentials: true,
})

// Function to set the Bearer token
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