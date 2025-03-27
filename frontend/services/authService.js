import { apiService } from "./apiService";


export const authService = {
    register: async (username, password) => {
        const res = await apiService.post("/register", { username, password });
        return res.data;
    },
    login: async (username, password) => {
        const res = await apiService.post("/login", { username, password });
        return res.data;
    },
    logout: async () => {
        await apiService.post("/logout");
    },
};