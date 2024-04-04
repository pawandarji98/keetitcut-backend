const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/services-controller')

// ROUTES
router.post('/get-list' , servicesController.getListOfServices);
router.post('/get-list/addons' , servicesController.getListOfAddonsOnService);



module.exports = router;