const express = require("express");

const router = express.Router();
const helpController = require("../../controllers/helpController");
const pollController = require("../../controllers/pollController");

router.post("/poll", pollController.create);
router.get("/poll", pollController.getAllPolls);
router.delete("/poll/:id", pollController.destroy);
router.get("/poll/:id", pollController.getPoll);
router.patch("/poll", pollController.update);


router.get("/help", helpController.helpDetails);

module.exports = router;