// Import Mongoose
const mongoose = require("mongoose");

// Define the patient report schema
const patientReportSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  reportDate: {
    type: Date,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  prescription: {
    type: String,
  },
  notes: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a PatientReport model using the patientReportSchema
const PatientReport = mongoose.model("PatientReport", patientReportSchema);

// Export the model
module.exports = PatientReport;
