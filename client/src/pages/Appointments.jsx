import { useEffect, useState } from "react";

function Appointments(){

const [appointments,setAppointments] = useState([]);

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("appointments")) || [];
setAppointments(data);

},[]);

return(

<div style={{textAlign:"center",marginTop:"60px"}}>

<h1>Your Appointments</h1>

{appointments.length===0 && <p>No Appointments</p>}

{appointments.map((app,index)=>(

<div key={index} style={{
border:"1px solid gray",
margin:"10px",
padding:"10px"
}}>

<h3>Name: {app.name}</h3>

<p>Doctor/Lawyer: {app.person}</p>

<p>Date: {app.date}</p>

<p>Status: {app.status || "Pending"}</p>

</div>

))}

</div>

);

}

export default Appointments;