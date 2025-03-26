const express = require('express');
const router = express.Router();

const { updateUsername, updatePassword, deleteUser } = require('../controllers/user.controller');

const verifyJWT = require('../middleware/verifyJWT');

// edit username
router.put('/:userId/username', verifyJWT, updateUsername);

// change-password
router.put('/:userId/password', verifyJWT, updatePassword);

// delete account
router.delete('/:userId', verifyJWT, deleteUser);

module.exports = router;