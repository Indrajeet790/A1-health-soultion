const express = require("express");
const router = express.Router();
const makeCallController = require("../controllers/makeCall");
console.log("come baby");

router.get("/call", makeCallController.makeCall);

module.exports = router;
