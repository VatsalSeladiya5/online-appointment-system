import { useEffect, useState } from "react";

function AdminAppointments(){

const [appointments,setAppointments] = useState([]);

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("appointments")) || [];
setAppointments(data);

},[]);

const acceptAppointment=(index)=>{

const updated=[...appointments];

updated[index].status="Accepted";

localStorage.setItem("appointments",JSON.stringify(updated));

setAppointments(updated);

};

const rejectAppointment=(index)=>{

const updated=appointments.filter((_,i)=>i!==index);

localStorage.setItem("appointments",JSON.stringify(updated));

setAppointments(updated);

};

return(

<div style={{textAlign:"center",marginTop:"60px"}}>

<h1>Admin - Manage Appointments</h1>

{appointments.length===0 && <p>No Appointments</p>}

{appointments.map((app,index)=>(

<div key={index} style={{
border:"1px solid gray",
margin:"10px",
padding:"10px"
}}>

<h3>Customer: {app.name}</h3>

<p>{app.type==="doctor" ? "Doctor" : "Lawyer"}: {app.person}</p>

<p>Date: {app.date}</p>

<p>Status: {app.status || "Pending"}</p>

<br/>

<button onClick={()=>acceptAppointment(index)}>
Accept
</button>

&nbsp;&nbsp;

<button onClick={()=>rejectAppointment(index)}>
Reject
</button>

</div>

))}

</div>

);

}

export default AdminAppointments;