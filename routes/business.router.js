const express = require('express');
const router = express.Router();
const businessController = require('../controllers/business-controller')


// ROUTES
router.get('/get-list' , businessController.getListOfBusinesses);

router.get('/get-list/client' , businessController.getListOfClients);

module.exports = router;