const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointments-controllers')
const reAuthMiddleWare = require("../middleware/reAuth");




// Appointment : READ

router.post('/appointment-categories-list' , reAuthMiddleWare.reAuthStratergy, appointmentController.getListOfAppointmentCategories);
router.post('/appointment-cancellation-reason-list' ,reAuthMiddleWare.reAuthStratergy, appointmentController.getListOfAppointmentCancellationReasons);
router.post('/booked-appointment-service-detail' ,reAuthMiddleWare.reAuthStratergy, appointmentController.getDetailOfBookedService);
router.post('/appointment-detail' ,reAuthMiddleWare.reAuthStratergy, appointmentController.getDetailOfAppointment);
router.post('/appointment-category-detail' ,reAuthMiddleWare.reAuthStratergy, appointmentController.getDetailOfAppointmentCategory);
router.post('/appointment-cancellation-reason-detail' ,reAuthMiddleWare.reAuthStratergy, appointmentController.getDetailOfAppointmentCancellationReason);
router.post('/booked-appointment-services-list' ,reAuthMiddleWare.reAuthStratergy, appointmentController.getListOfBookedAppointmentServices);

// DDS
router.post('/get-list/dds' ,reAuthMiddleWare.reAuthStratergy, appointmentController.AppointmentChangesDDS);




// Appointment : WRITE

router.post('/create-appointment-book-service' ,reAuthMiddleWare.reAuthStratergy, appointmentController.createAppointmentBookService);
router.post('/update-appointment-book-service' ,reAuthMiddleWare.reAuthStratergy, appointmentController.updateAppointmentBookService);
router.post('/cancle-appointment-book-service' ,reAuthMiddleWare.reAuthStratergy, appointmentController.cancleAppointmentBookService);
router.post('/update-appointment' ,reAuthMiddleWare.reAuthStratergy, appointmentController.updateAppointment);



module.exports = router;