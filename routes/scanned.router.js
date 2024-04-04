const express = require('express');
const router = express.Router();
const scannedController = require('../controllers/scan-controller')

// ROUTES
router.post('/scanned' , scannedController.getListOfScanned);



module.exports = router;