const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/services-controller');
const reAuthMiddleWare = require("../middleware/reAuth");


// ROUTES
router.post('/get-list' , reAuthMiddleWare.reAuthStratergy, servicesController.getListOfServices);
module.exports = router;