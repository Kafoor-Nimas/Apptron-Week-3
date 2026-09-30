const express = require("express");
const { getCourses, addCourse } = require("../controllers/course.controller");
const router = express.Router();

router.get("/", getCourses);
router.post("/", addCourse);

module.exports = router;
