const Appointment = require("../models/Appointment");

exports.book = async(req,res)=>{

const appointment = new Appointment({

userId:req.user.id,

name:req.body.name,

service:req.body.service,

type:req.body.type,

date:req.body.date,

time:req.body.time

});

await appointment.save();

res.json("Appointment booked");

}

exports.myAppointments = async(req,res)=>{

const data = await Appointment.find({userId:req.user.id});

res.json(data);

}

exports.allAppointments = async(req,res)=>{

const data = await Appointment.find();

res.json(data);

}

exports.approve = async(req,res)=>{

await Appointment.findByIdAndUpdate(
req.params.id,
{status:"approved"}
);

res.json("Approved");

}

exports.reject = async(req,res)=>{

await Appointment.findByIdAndUpdate(
req.params.id,
{status:"rejected"}
);

res.json("Rejected");

}