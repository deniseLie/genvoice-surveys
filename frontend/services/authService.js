import { apiService, setAuthToken } from "./apiService";


export const authService = {
    register: async (username, password) => {
        try {
            const res = await apiService.post("/register", { username, password });
            setAuthToken(res.data.token);
            return res.data;
        } catch (e) {
            console.log("register error:", e);
            throw new Error(e.response?.data?.message || "Registration failed");
        }
    },
    login: async (username, password) => {
        try {
            // console.log("Login request body:", { username, password });

            const res = await apiService.post("/login", { username, password });
            setAuthToken(res.data.token)
            return res.data;
        } catch (e) {
            console.log("login error:", e);
            throw new Error(e.response?.data?.message || "Login failed");
        }
    },
    logout: async () => {
        try {
            await apiService.post("/logout");
            setAuthToken(null);
        } catch (e) {
            console.log("logout error:", e);
            throw new Error(e.response?.data?.message || "Logout failed");
        }
    },
};