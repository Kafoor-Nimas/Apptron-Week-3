const express = require("express");
const {
  getTrainers,
  addTrainer,
} = require("../controllers/trainer.controller");
const router = express.Router();

router.get("/", getTrainers);
router.post("/", addTrainer);

module.exports = router;
