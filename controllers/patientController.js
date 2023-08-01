const Patient = require("../models/patient");

module.exports.createPatient = async (req, res) => {
  try {
    const newPatient = await Patient.create(req.body);
    return res.send(newPatient);
  } catch (err) {
    console.log(err);
  }
};
