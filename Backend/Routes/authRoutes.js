const express = require('express');
const { registerUser, loginUser} = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Routes
router.post('/signup', registerUser);
router.post('/signin', loginUser);