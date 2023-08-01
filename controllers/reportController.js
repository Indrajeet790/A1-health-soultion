const PatientReport = require("../models/report");
const Patient = require("../models/patient");

// create patient  details 
module.exports.createPatientReport = async (req, res) => {
  try {
    const report = await PatientReport.create(req.body);
    return res.send(report);
  } catch (err) {
    console.log(err);
  }
};

// find patient report using phone number if phone number matched then report is viewed
module.exports.PatientReport = async (req, res) => {
  try {
    const patient = await Patient.findOne({ phone: req.query.phone });
    console.log(patient);
    if (req.query.phone === patient.phone) {
      const patientId = patient.id;
      if (patientId) {
        const report = await PatientReport.findOne({
          patientId: patientId,
        }).populate("patientId");
        console.log(report);

        return res.status(200).json(report);
      }
    }
  } catch (err) {
    console.log(err);
  }
};
