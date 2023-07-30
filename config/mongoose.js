// const mongoose = require("mongoose");

// // connect to the database
// mongoose.connect(
//   "mongodb+srv://health_api:Gupta@1998@cluster0.oidggmh.mongodb.net/health_tracker"
// );

const mongoose = require("mongoose");
// require("dotenv/config");

mongoose
  .connect("mongodb://127.0.0.1:27017/health_tracker")
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
