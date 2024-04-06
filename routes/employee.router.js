const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee-controller');
const reAuthMiddleWare = require("../middleware/reAuth");


// ROUTES
router.post('/get-list' , reAuthMiddleWare.reAuthStratergy, employeeController.getListOfEmployees);
router.post('/get-list/dds' , reAuthMiddleWare.reAuthStratergy, employeeController.EmployeeChangesDDS);


module.exports = router;