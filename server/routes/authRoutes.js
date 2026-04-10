const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req,res)=>{
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if(!user){
    return res.status(400).json("User not found");
  }

  if(user.password !== password){
    return res.status(400).json("Wrong password");
  }

  res.json({
    message: "Login success",
    role: user.role
  });
});

module.exports = router;