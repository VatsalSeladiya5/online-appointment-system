import { useState } from "react";

function AddLawyer(){

const [name,setName] = useState("");
const [field,setField] = useState("");
const [exp,setExp] = useState("");

const saveLawyer=(e)=>{

e.preventDefault();

const lawyer = {name,field,exp};

const old = JSON.parse(localStorage.getItem("lawyers")) || [];

localStorage.setItem("lawyers",JSON.stringify([...old,lawyer]));

alert("Lawyer Added");

setName("");
setField("");
setExp("");

}

return(

<div style={{textAlign:"center",marginTop:"80px"}}>

<h1>Add Lawyer</h1>

<form onSubmit={saveLawyer}>

<input
placeholder="Lawyer Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Field"
value={field}
onChange={(e)=>setField(e.target.value)}
/>

<br/><br/>

<input
placeholder="Experience"
value={exp}
onChange={(e)=>setExp(e.target.value)}
/>

<br/><br/>

<button type="submit">Add Lawyer</button>

</form>

</div>

)

}

export default AddLawyer;