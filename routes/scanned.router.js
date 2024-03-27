const express = require('express');
const router = express.Router();
const scannedController = require('../controllers/scan-controller')

// ROUTES
router.get('/scanned' , scannedController.getListOfScanned);



module.exports = router;