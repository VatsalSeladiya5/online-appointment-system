import { useState } from "react";

function AddDoctor(){

const [name,setName] = useState("");
const [spec,setSpec] = useState("");
const [exp,setExp] = useState("");

const saveDoctor=(e)=>{

e.preventDefault();

const doctor = {name,spec,exp};

const old = JSON.parse(localStorage.getItem("doctors")) || [];

localStorage.setItem("doctors",JSON.stringify([...old,doctor]));

alert("Doctor Added");

setName("");
setSpec("");
setExp("");

}

return(

<div style={{textAlign:"center",marginTop:"80px"}}>

<h1>Add Doctor</h1>

<form onSubmit={saveDoctor}>

<input
placeholder="Doctor Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Specialization"
value={spec}
onChange={(e)=>setSpec(e.target.value)}
/>

<br/><br/>

<input
placeholder="Experience"
value={exp}
onChange={(e)=>setExp(e.target.value)}
/>

<br/><br/>

<button type="submit">Add Doctor</button>

</form>

</div>

)

}

export default AddDoctor;