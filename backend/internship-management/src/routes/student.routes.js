const express = require("express");
const {
  getStudents,
  addStudent,
  getSingleStudent,
} = require("../controllers/student.controller");
const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getSingleStudent);
router.post("/", addStudent);

module.exports = router;
