const express = require("express");
const { protect } = require("../middleware/auth.middleware");
const { authorizeRoles } = require("../middleware/role.middleware");
const {
  updateTask,
  getTasks,
  createTask,
  getTasksById,
} = require("../controllers/task.controller");

const router = express.Router();

router.use(protect);

router.get("/", authorizeRoles("Student", "Admin", "Trainer"), getTasks);
router.post("/", authorizeRoles("Admin", "Trainer"), createTask);
router.get("/:id", authorizeRoles("Admin", "Trainer", "Student"), getTasksById);
router.put("/:id", authorizeRoles("Admin", "Trainer", "Student"), updateTask);

module.exports = router;
