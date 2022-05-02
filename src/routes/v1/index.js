const express = require("express");

const router = express.Router();
const helpController = require("../../controllers/helpController");
const pollController = require("../../controllers/pollController");
const responseController = require("../../controllers/responseController");

router.post("/poll", pollController.create);
router.get("/poll", pollController.getAllPolls);
router.delete("/poll/:id", pollController.destroy);
router.get("/poll/:id", pollController.getPoll);
router.patch("/poll", pollController.update);

router.post("/response", responseController.create);
router.get("/response/:pollid", responseController.getAllResponsesForAPoll);

router.get("/help", helpController.helpDetails);

module.exports = router;