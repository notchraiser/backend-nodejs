const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set("strictQuery", false);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
