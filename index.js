const express = require("express");
const app = express();
const port = 3000; // Change to your preferred port
const db = require("./config/mongoose");
const accountSid = "YOUR_TWILIO_ACCOUNT_SID";
const authToken = "YOUR_TWILIO_AUTH_TOKEN";
const twilioPhoneNumber = "YOUR_TWILIO_PHONE_NUMBER";
// const twilio = require('twilio')(accountSid, authToken)

app.get("/call", (req, res) => {
  // Replace the 'to' property with the phone number you want to call
  const phoneNumberToCall = "+1234567890";

  twilio.calls
    .create({
      url: "http://demo.twilio.com/docs/voice.xml", // A TwiML Bin URL that contains the instructions for the call (example: saying a message)
      to: phoneNumberToCall,
      from: twilioPhoneNumber,
    })
    .then((call) => {
      console.log("Call SID:", call.sid);
      res.send("Call initiated successfully!");
    })
    .catch((error) => {
      console.error("Error initiating call:", error);
      res.status(500).send("Failed to initiate call.");
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
