const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv/config");
const initiateCall = require("./controllers/makeCall");

const port = 8000;
const db = require("./config/mongoose");

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create patient
app.use("/", require("./routes/patientRoutes"));

// getting report routes
app.use("/", require("./routes/patientReport"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
