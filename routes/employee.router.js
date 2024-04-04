const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee-controller')

// ROUTES
router.post('/get-list' , employeeController.getListOfEmployees);


module.exports = router;