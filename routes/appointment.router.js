const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointments-controllers')



// Appointment : READ

router.get('/appointment-categories-list' , appointmentController.getListOfAppointmentCategories);
router.get('/appointment-cancellation-reason-list' , appointmentController.getListOfAppointmentCancellationReasons);
router.get('/booked-appointment-service-detail' , appointmentController.getDetailOfBookedService);
router.get('/appointment-detail' , appointmentController.getDetailOfAppointment);
router.get('/appointment-category-detail' , appointmentController.getDetailOfAppointmentCategory);
router.get('/appointment-cancellation-reason-detail' , appointmentController.getDetailOfAppointmentCancellationReason);
router.get('/booked-appointment-services-list' , appointmentController.getListOfBookedAppointmentServices);



// Appointment : READ

router.get('/create-appointment-book-service' , appointmentController.createAppointmentBookService);
router.get('/update-appointment-book-service' , appointmentController.updateAppointmentBookService);
router.get('/cancle-appointment-book-service' , appointmentController.cancleAppointmentBookService);
router.get('/update-appointment' , appointmentController.updateAppointment);



module.exports = router;