const express = require('express');
const router = express.Router();
const businessController = require('../controllers/business-controller')
const reAuthMiddleWare = require("../middleware/reAuth");


// ROUTES
router.post('/get-list' ,reAuthMiddleWare.reAuthStratergy, businessController.getListOfBusinesses);
module.exports = router;