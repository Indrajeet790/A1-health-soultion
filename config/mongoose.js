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
