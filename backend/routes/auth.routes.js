const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/auth.controller');

const verifyJWT = require('../middleware/verifyJWT');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', verifyJWT, logout);

module.exports = router;