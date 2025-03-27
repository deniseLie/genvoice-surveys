import { apiService } from "./apiService";

export const adminService = {
    
  // Create a new user
  createUser: async (name, email) => {
    try {
      const res = await apiService.post("/admin/users", { name, email });
      return res.data;
    } catch (e) {
      console.log("createUser error:", e);
      throw new Error(e.response?.data?.message || "Failed to create user");
    }
  },

  // Get all users
  getAllUsers: async () => {
    try {
      const res = await apiService.get("/admin/users");
      return res.data;
    } catch (e) {
      console.log("getAllUsers error:", e);
      throw new Error(e.response?.data?.message || "Failed to fetch users");
    }
  },

  // Get a user by ID
  getUserById: async (userId) => {
    try {
      const res = await apiService.get(`/admin/users/${userId}`);
      return res.data;
    } catch (e) {
      console.log("getUserById error:", e);
      throw new Error(e.response?.data?.message || "Failed to fetch user");
    }
  },

  // Update a user as admin
  updateUserAsAdmin: async (userId, updatedUserData) => {
    try {
      const res = await apiService.put(`/admin/users/${userId}`, updatedUserData);
      return res.data;
    } catch (e) {
      console.log("updateUserAsAdmin error:", e);
      throw new Error(e.response?.data?.message || "Failed to update user");
    }
  },

  // Delete a user as admin
  deleteUserAsAdmin: async (userId) => {
    try {
      const res = await apiService.delete(`/admin/users/${userId}`);
      return res.data;
    } catch (e) {
      console.log("deleteUserAsAdmin error:", e);
      throw new Error(e.response?.data?.message || "Failed to delete user");
    }
  },
};
