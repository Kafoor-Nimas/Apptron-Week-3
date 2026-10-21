const express = require("express");
const { protect } = require("../middleware/auth.middleware");
const { authorizeRoles } = require("../middleware/role.middleware");
const { getDashboardStats } = require("../controllers/dashboard.controller");

const router = express.Router();

router.use(protect);

router.get("/", authorizeRoles("Admin", "Trainer"), getDashboardStats);

module.exports = router;
