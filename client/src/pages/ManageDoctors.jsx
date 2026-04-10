import { useEffect,useState } from "react";

function ManageDoctors(){

const [doctors,setDoctors] = useState([]);

useEffect(()=>{
fetchDoctors();
},[])

const fetchDoctors = async () => {

// local doctors
const localData = JSON.parse(localStorage.getItem("doctors")) || [];

// mongodb doctors
const res = await fetch("http://localhost:5000/api/doctors");
const mongoData = await res.json();

// merge both
setDoctors([...localData, ...mongoData]);

}

const removeDoctor = async (index,doc) => {

// अगर localStorage वाला doctor है
if(!doc._id){

const localData = JSON.parse(localStorage.getItem("doctors")) || [];
const updated = localData.filter((_,i)=>i!==index);

localStorage.setItem("doctors",JSON.stringify(updated));
setDoctors(updated);

}

// अगर MongoDB वाला doctor है
else{

await fetch(`http://localhost:5000/api/doctors/${doc._id}`,{
method:"DELETE"
});

fetchDoctors();

}

}

return(

<div style={{textAlign:"center",marginTop:"80px"}}>

<h1>Manage Doctors</h1>

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
Experience: {doc.exp || doc.experience}
</p>

<button onClick={()=>removeDoctor(index,doc)}>
Remove
</button>

</div>

))}

</div>

)

}

export default ManageDoctors;