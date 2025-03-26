const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Create a new user
const createUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Create new user
        const user = new User({ username, password, role });
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

// Get single user by ID
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
        if (existingUser && existingUser._id.toString() !== req.params.userId) {
        return res.status(400).json({ message: 'Username already taken' });
        }

        const user = await User.findByIdAndUpdate(
        req.params.userId,
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
        const { currentPassword, newPassword } = req.body;
        const user = await User.findById(req.params.userId);

        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }

        // Verify current password
        const isMatch = await user.comparePassword(currentPassword);
        if (!isMatch) {
        return res.status(401).json({ message: 'Current password is incorrect' });
        }

        // Update password
        user.password = newPassword;
        await user.save();

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating password', error: error.message });
    }
};

// Delete user
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
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
  deleteUser
};