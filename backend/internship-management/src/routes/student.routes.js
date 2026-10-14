const express = require("express");
const {
  getStudents,
  addStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller");
const { protect } = require("../middleware/auth.middleware");
const router = express.Router();

router.get("/", protect, getStudents);
router.get("/:id", protect, getSingleStudent);
router.post("/", protect, addStudent);
router.put("/:id", protect, updateStudent);
router.delete("/:id", protect, deleteStudent);

module.exports = router;
