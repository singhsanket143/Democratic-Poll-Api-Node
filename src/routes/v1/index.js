const express = require("express");

const router = express.Router();
const helpController = require("../../controllers/helpController");


router.get("/help", helpController.helpDetails);

module.exports = router;