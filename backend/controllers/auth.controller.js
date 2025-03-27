// controllers/user.controller.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// REGISTER
const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Create new user
        const user = new User({ username, password });
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1hr' }
        );

        return res.status(201).json({
            message: 'User created successfully',
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            },
            token
        });
    } catch (e) {
        res.status(500).json({ message: 'Registration failed', error: e.message });
    }
};

// LOGIN
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Incorrect username or password' });
        }

        // Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Incorrect username or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1hr' }
        );

        return res.json({
            message: 'Login successful',
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            },
            token
        });
    } catch (e) {
        res.status(500).json({ message: 'Login failed', error: e.message });
    }
};

// LOGOUT
const logout = (req, res) => {
    try {
        return res.json({ message: "Logout successful"});
    } catch (e) {
        res.status(500).json({ message: 'Logout failed', error: e.message });
    }
}

module.exports = {
    register,
    login,
    logout
};