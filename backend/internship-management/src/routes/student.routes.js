const express = require("express");
const {
  getStudents,
  addStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller");
const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getSingleStudent);
router.post("/", addStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
