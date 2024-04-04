const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointments-controllers')



// Appointment : READ

router.post('/appointment-categories-list' , appointmentController.getListOfAppointmentCategories);
router.post('/appointment-cancellation-reason-list' , appointmentController.getListOfAppointmentCancellationReasons);
router.post('/booked-appointment-service-detail' , appointmentController.getDetailOfBookedService);
router.post('/appointment-detail' , appointmentController.getDetailOfAppointment);
router.post('/appointment-category-detail' , appointmentController.getDetailOfAppointmentCategory);
router.post('/appointment-cancellation-reason-detail' , appointmentController.getDetailOfAppointmentCancellationReason);
router.post('/booked-appointment-services-list' , appointmentController.getListOfBookedAppointmentServices);



// Appointment : WRITE

router.post('/create-appointment-book-service' , appointmentController.createAppointmentBookService);
router.post('/update-appointment-book-service' , appointmentController.updateAppointmentBookService);
router.post('/cancle-appointment-book-service' , appointmentController.cancleAppointmentBookService);
router.post('/update-appointment' , appointmentController.updateAppointment);



module.exports = router;