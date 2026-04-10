import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorList(){

const [doctors,setDoctors] = useState([]);
const navigate = useNavigate();

useEffect(()=>{

fetchDoctors();

},[])

const fetchDoctors = async () => {

// localStorage doctors
const localData = JSON.parse(localStorage.getItem("doctors")) || [];

// MongoDB doctors
const res = await fetch("http://localhost:5000/api/doctors");
const mongoData = await res.json();

// merge both
const allDoctors = [...localData, ...mongoData];

setDoctors(allDoctors);

};

return(

<div style={{textAlign:"center",marginTop:"50px"}}>

<h1>Select Doctor</h1>

{doctors.length === 0 && <p>No Doctors Available</p>}

{doctors.map((doc,index)=>(

<div key={index} style={{
border:"1px solid gray",
margin:"10px",
padding:"10px"
}}>

<h3>{doc.name}</h3>

<p>
Specialization: {doc.spec || doc.specialization}
</p>

<p>
Experience: {doc.exp || doc.experience} years
</p>

<button onClick={()=>navigate(`/doctor/${doc.name}`)}>
Book Appointment
</button>

</div>

))}

</div>

)

}

export default DoctorList;