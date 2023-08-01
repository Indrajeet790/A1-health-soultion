const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");

router.post("/create/patients", patientController.createPatient);

module.exports = router;
