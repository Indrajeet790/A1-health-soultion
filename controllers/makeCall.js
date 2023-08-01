const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
require("dotenv/config");
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const twilio = require("twilio")(accountSid, authToken);

module.exports.makeCall = (req, res) => {
  // Replace the 'to' property with the phone number you want to call

  twilio.calls
    .create({
      url: "https://handler.twilio.com/twiml/EH798272d65880d3555fcad389f8b13049",
      // A TwiML Bin URL that contains the instructions for the call (example: saying a message)
      to: +917903605302,
      from: +14705180842,
    })
    .then((call) => {
      console.log("Call SID:", call.sid);
      res.send("Call initiated successfully!");
    })
    .catch((error) => {
      console.error("Error initiating call:", error);
      res.status(500).send("Failed to initiate call.");
    });
};
