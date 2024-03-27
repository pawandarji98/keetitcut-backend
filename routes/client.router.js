const express = require('express');
const router = express.Router();
const clientController =  require('../controllers/client-controller');

// ROUTES
router.post('/create-client' , clientController.createClient)



module.exports = router;