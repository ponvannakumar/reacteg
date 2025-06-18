const express = require("express");
const router = express.Router();
const infoController = require("../controllers/infoController");

// Admin route
router.post("/admin/info", infoController.addInformation);

// User route
router.get("/user/info", infoController.getInformation);

module.exports = router;
