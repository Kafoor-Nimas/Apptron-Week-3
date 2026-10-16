const express = require("express");
const {
  getStudents,
  addStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller");
const { protect } = require("../middleware/auth.middleware");
const { authorizeRoles } = require("../middleware/role.middleware");
const router = express.Router();

// All routes require logged in user (JWT Token verification)
router.use(protect);

router.get("/", authorizeRoles("Admin", "Trainer", "Student"), getStudents);
router.post("/", authorizeRoles("Admin", "Trainer"), addStudent);
router.get("/:id", authorizeRoles("Admin", "Trainer"), getSingleStudent);
router.put("/:id", authorizeRoles("Admin", "Trainer"), updateStudent);
router.delete("/:id", authorizeRoles("Admin"), deleteStudent);

module.exports = router;
