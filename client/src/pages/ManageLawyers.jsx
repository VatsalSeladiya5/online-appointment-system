import { useEffect,useState } from "react";

function ManageLawyers(){

const [lawyers,setLawyers] = useState([]);

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("lawyers")) || [];
setLawyers(data);

},[])

const removeLawyer=(index)=>{

const updated = lawyers.filter((_,i)=>i!==index);

localStorage.setItem("lawyers",JSON.stringify(updated));

setLawyers(updated);

}

return(

<div style={{textAlign:"center",marginTop:"80px"}}>

<h1>Manage Lawyers</h1>

{lawyers.map((law,index)=>(

<div key={index} style={{
border:"1px solid gray",
margin:"10px",
padding:"10px"
}}>

<h3>{law.name}</h3>
<p>Field: {law.field}</p>
<p>Experience: {law.exp}</p>

<button onClick={()=>removeLawyer(index)}>
Remove
</button>

</div>

))}

</div>

)

}

export default ManageLawyers;