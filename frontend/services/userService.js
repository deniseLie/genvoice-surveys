import { apiService } from "./apiService"


export const userService = {
    updateUsername: async (newUsername) => {
        try {
            const res = await apiService.put("/users/username", { username : newUsername });
            return res.data;
        } catch (e) {
            console.log("udpateUsername error:", e);
            throw new Error(e.response?.data?.message || "Updating username failed");
        }
    },
    updatePassword: async (newPassword) => {
        try {
            const res = await apiService.put("/users/password", { newPassword : newPassword });
            return res.data;
        } catch (e) {
            console.log("updatePassword error:", e);
            throw new Error(e.response?.data?.message || "Updating password failed");
        }
    },
    deleteUser: async () => {
        try {
            const res = await apiService.delete("/users");
            return res.data;
        } catch (e) {
            console.log("deleteUser error:", e);
            throw new Error(e.response?.data?.message || "Deleting user failed");
        }
    }
}

