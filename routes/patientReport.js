const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

router.post("/create/reports", reportController.createPatientReport);
router.get("/get/reports", reportController.PatientReport);

module.exports = router;
