const express = require("express");
const { protect } = require("../middleware/auth.middleware");
const { checkIn, checkOut, getAttendance } = require("../controllers/attendance.controller");

const router = express.Router();

router.use(protect);

router.post("/checkin", checkIn);
router.post("/checkout", checkOut);
router.get("/", getAttendance);

module.exports = router;
