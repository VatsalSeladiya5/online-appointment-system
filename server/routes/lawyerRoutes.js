const express = require("express");
const router = express.Router();
const Lawyer = require("../models/Lawyer");

// get all lawyers
router.get("/", async (req, res) => {
  try {
    const lawyers = await Lawyer.find();
    res.json(lawyers);
  } catch (error) {
    res.status(500).json(error);
  }
});

// add lawyer
router.post("/", async (req, res) => {
  try {
    const lawyer = new Lawyer({
      name: req.body.name,
      specialization: req.body.specialization,
      experience: req.body.experience,
      fees: req.body.fees
    });

    await lawyer.save();
    res.json(lawyer);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;