const express = require("express");
const {
  getStudents,
  addStudent,
  getSingleStudent,
  updateStudent,
} = require("../controllers/student.controller");
const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getSingleStudent);
router.post("/", addStudent);
router.put("/:id", updateStudent);

module.exports = router;
