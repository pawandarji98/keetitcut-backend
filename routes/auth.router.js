const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/auth-controller');

// ROUTES
router.get('/login' , AuthorController.generateToken);


module.exports = router;