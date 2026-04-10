const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// BOOK
router.post("/book", async (req,res)=>{
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.json("Appointment Booked");
});

// GET ALL
router.get("/", async (req,res)=>{
  const data = await Appointment.find();
  res.json(data);
});

module.exports = router;