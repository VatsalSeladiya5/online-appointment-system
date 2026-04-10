const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  doctor: String,
  lawyer: String
});

module.exports = mongoose.model("Appointment", appointmentSchema);