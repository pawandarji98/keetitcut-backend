const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/services-controller')

// ROUTES
router.get('/get-list' , servicesController.getListOfServices);
router.get('/get-list/addons' , servicesController.getListOfAddonsOnService);



module.exports = router;