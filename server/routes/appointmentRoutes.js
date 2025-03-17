const express = require(`express`);

const {
    createAppointmentController,
    getAppointmentsController,
    cancelAppointment,
    scheduleAppointment
} = require(`../controllers/appointmentControllers`);

const router = express.Router();

router.get(`/`,getAppointmentsController)
router.post("/new-appointment",createAppointmentController);
router.put(`/cancel-appointment/:id`,cancelAppointment);
router.put(`/schedule-appointment/:id`,scheduleAppointment);




module.exports = router;
