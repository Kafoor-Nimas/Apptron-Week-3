const express = require("express");
const { protect } = require("../middleware/auth.middleware");
const { authorizeRoles } = require("../middleware/role.middleware");
const {
  createMeeting,
  getMeetings,
  getMeetingsById,
  updateMeeting,
  deleteMeeting,
} = require("../controllers/meeting.controller");

const router = express.Router();

router.use(protect);

router.post("/", authorizeRoles("Admin", "Trainer"), createMeeting);
router.get("/", authorizeRoles("Admin", "Trainer", "Student"), getMeetings);
router.get(
  "/:id",
  authorizeRoles("Admin", "Trainer", "Student"),
  getMeetingsById,
);
router.put("/:id", authorizeRoles("Admin", "Trainer"), updateMeeting);
router.delete("/:id", authorizeRoles("Admin"), deleteMeeting);

module.exports = router;
