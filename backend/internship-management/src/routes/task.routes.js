const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Task route working");
});

module.exports = router;
