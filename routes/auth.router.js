const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/auth-controller');
const scannedController = require('../controllers/scan-controller')

// ROUTES
router.get('/login' , AuthorController.generateToken);
router.get('/scanned' , scannedController.getListOfScanned);



module.exports = router;