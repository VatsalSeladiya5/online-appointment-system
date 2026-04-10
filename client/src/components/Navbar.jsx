import {Link} from "react-router-dom";

export default function Navbar(){

return(

<div className="navbar">

<h2>Appointment System</h2>

<div>

<Link to="/">Home</Link>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>

</div>

</div>

);

}