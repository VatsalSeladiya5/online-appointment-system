const mongoose = require("mongoose");

const lawyerSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,
  fees: Number
});

module.exports = mongoose.model("Lawyer", lawyerSchema);