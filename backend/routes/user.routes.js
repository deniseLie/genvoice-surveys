const express = require('express');
const router = express.Router();
const {
  updateUsername,
  updatePassword,
  deleteUser,
} = require('../controllers/user.controller');

const verifyJWT = require('../middleware/verifyJWT');
const verifyAdmin = require('../middleware/verifyAdmin');

// User self-management routes (protected by verifyJWT)
router.put('/username', verifyJWT, updateUsername); 
router.put('/password', verifyJWT, updatePassword); 
router.delete('/', verifyJWT, deleteUser); 

module.exports = router;