const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");

const {
allAppointments,
approve,
reject
} = require("../controllers/appointmentController");

router.get("/appointments",auth,role("admin"),allAppointments);

router.put("/approve/:id",auth,role("admin"),approve);

router.put("/reject/:id",auth,role("admin"),reject);

module.exports = router;