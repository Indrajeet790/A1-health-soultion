// const express = require("express");
// const VoiceResponse = require("twilio").twiml.VoiceResponse;

// const app = express();

// // Create a route that will handle Twilio webhook requests, sent as an
// // HTTP POST to /voice in our application
// module.exports.responseCall = async (request, response) => {
//   // Use the Twilio Node.js SDK to build an XML response
//   const twiml = new VoiceResponse();
//   twiml.say("Hello world!");

//   // Render the response as XML in reply to the webhook request
//   response.type("text/xml");
//   response.send(twiml.toString());
// };