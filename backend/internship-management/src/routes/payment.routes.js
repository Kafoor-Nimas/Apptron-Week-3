const express = require("express");
const { protect } = require("../middleware/auth.middleware");
const { createCheckoutSession } = require("../controllers/payment.controller");

const router = express.Router();

router.use(protect);

router.post("/create-checkout-session", createCheckoutSession);

module.exports = router;
