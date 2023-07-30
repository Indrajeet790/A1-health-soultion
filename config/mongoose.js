// const mongoose = require("mongoose");

// // connect to the database
// mongoose.connect(
//   "mongodb+srv://health_api:Gupta@1998@cluster0.oidggmh.mongodb.net/health_tracker"
// );

const mongoose = require("mongoose");
require("dotenv/config");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
