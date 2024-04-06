const express = require('express');
const router = express.Router();
const scannedController = require('../controllers/scan-controller');
const reAuthMiddleWare = require("../middleware/reAuth");


// ROUTES
router.post('/scanned' , reAuthMiddleWare.reAuthStratergy, scannedController.getListOfScanned);



module.exports = router;