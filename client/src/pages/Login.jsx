import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

const navigate = useNavigate();

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const handleLogin=(e)=>{

e.preventDefault();

if(username==="admin" && password==="1234"){

localStorage.setItem("admin","true");

navigate("/admin");

}else{

alert("Invalid Username or Password");

}

};

return(

<div style={{textAlign:"center",marginTop:"80px"}}>

<h1>Admin Login</h1>

<form onSubmit={handleLogin}>

<input
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button type="submit">
Login
</button>

</form>

</div>

);

}

export default Login;