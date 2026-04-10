const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async(req,res)=>{

const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash(req.body.password,salt);

const user = new User({

name:req.body.name,
email:req.body.email,
password:hashed

});

await user.save();

res.json("User Registered");

}

exports.login = async(req,res)=>{

const user = await User.findOne({email:req.body.email});

if(!user) return res.status(400).json("User not found");

const valid = await bcrypt.compare(req.body.password,user.password);

if(!valid) return res.status(400).json("Wrong password");

const token = jwt.sign(
{id:user._id,role:user.role},
process.env.JWT_SECRET
);

res.json({token});

}