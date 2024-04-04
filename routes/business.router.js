const express = require('express');
const router = express.Router();
const businessController = require('../controllers/business-controller')


// ROUTES
router.post('/get-list' , businessController.getListOfBusinesses);

router.post('/get-list/client' , businessController.getListOfClients);

module.exports = router;