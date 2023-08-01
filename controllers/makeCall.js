// const cron = require("node-cron");
const phoneNumberToCall = process.env.PHONE_NUMBER_TO_RECEIVE;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
require("dotenv/config");
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const twilio = require("twilio")(accountSid, authToken);

// Function to initiate the call
function initiateCall() {
  twilio.calls
    .create({
      url: process.env.URL, // A TwiML Bin URL that contains the instructions for the call (example: saying a message)
      to: phoneNumberToCall,
      from: twilioPhoneNumber,
    })
    .then((call) => {
      console.log("Call SID:", call.sid);
    })
    .catch((error) => {
      console.error("Error initiating call:", error);
    });
}

// schedule the remainder call daily 9 am for patient
const cron = require("node-cron");
cron.schedule("14 * * *", () => {
  initiateCall();
});

module.exports = {
  initiateCall: initiateCall,
};
