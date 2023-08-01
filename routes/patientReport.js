const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

router.post("/create/report", reportController.createPatientReport);
router.get("/get/report", reportController.PatientReport);

module.exports = router;
