const express = require("express");
const {
  getStudents,
  addStudent,
} = require("../controllers/student.controller");
const router = express.Router();

router.get("/", getStudents);
router.post("/", addStudent);

module.exports = router;
