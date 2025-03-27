const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Create a new user
const createUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Validate input
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        // Check if user exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Create new user
        const user = new User({ username, password, role: role || 'user' });
        await user.save();

        res.status(201).json({
        message: 'User created successfully',
        user: {
            id: user._id,
            username: user.username,
            role: user.role
        },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

// Get all users (admin only)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

// Get single user by ID (admin)
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};

// Update username
const updateUsername = async (req, res) => {
    try {
        const { username } = req.body;
        
        // Check if new username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already taken' });
        }

        const user = await User.findByIdAndUpdate(
            req.user.id,
            { username },
            { new: true }
        ).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'Username updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error updating username', error: error.message });
    }
};

// Update password
const updatePassword = async (req, res) => {
    try {
        const { newPassword } = req.body;
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update password
        user.password = newPassword;
        await user.save();

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating password', error: error.message });
    }
};

// update user detail (username, role)
const updateUserAsAdmin = async (req, res) => {
    try {
      const { username, role } = req.body;
      const updates = {};
  
      if (username) updates.username = username;
      if (role) updates.role = role;
  
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        updates,
        { new: true }
      ).select('-password');
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User updated successfully', user });
    } catch (error) {
      res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

// Delete user (themselves)
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'Your account has been deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

// Admin can delete any user
const deleteUserAsAdmin = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully by admin' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUsername,
  updatePassword,
  updateUserAsAdmin,
  deleteUser,
  deleteUserAsAdmin
};