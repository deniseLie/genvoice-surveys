const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, getUserById, updateUsername, updatePassword, deleteUser } = require('../controllers/user.controller');

const verifyJWT = require('../middleware/verifyJWT');
const adminCheck = require('../middleware/verifyAdmin');

// Create a new user (admin)
router.post('/create', createUser);

// Get all users 
router.get('/', verifyJWT, adminCheck, getAllUsers);

// Get a user by userId 
router.get('/:userId', verifyJWT, getUserById);

// update username
router.put('/:userId/username', verifyJWT, updateUsername);

// reset user password
router.put('/:userId/password', verifyJWT, updatePassword);

// delete user (admin)
router.delete('/:userId', verifyJWT, deleteUser);

module.exports = router;