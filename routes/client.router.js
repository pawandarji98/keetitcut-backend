const express = require('express');
const router = express.Router();
const clientController =  require('../controllers/client-controller');
const reAuthMiddleWare = require("../middleware/reAuth");

// ROUTES
router.post('/create-client' , reAuthMiddleWare.reAuthStratergy, clientController.createClient);
router.post('/get-list/dds' , reAuthMiddleWare.reAuthStratergy, clientController.clientChangesDDS)



module.exports = router;