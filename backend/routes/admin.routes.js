const express = require('express');
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserAsAdmin,
  deleteUserAsAdmin
} = require('../controllers/user.controller');

const verifyJWT = require('../middleware/verifyJWT');
const verifyAdmin = require('../middleware/verifyAdmin');

// Admin-only routes
router.post('/users', verifyJWT, verifyAdmin, createUser);
router.get('/users', verifyJWT, verifyAdmin, getAllUsers);
router.get('/users/:userId', verifyJWT, verifyAdmin, getUserById);
router.put('/users/:userId', verifyJWT, verifyAdmin, updateUserAsAdmin); 
router.delete('/users/:userId', verifyJWT, verifyAdmin, deleteUserAsAdmin); 

module.exports = router;