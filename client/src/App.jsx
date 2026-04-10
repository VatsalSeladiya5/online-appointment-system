import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DoctorList from "./pages/DoctorList";
import LawyerList from "./pages/LawyerList";
import DoctorAppointment from "./pages/DoctorAppointment";
import LawyerAppointment from "./pages/LawyerAppointment";
import Appointments from "./pages/Appointments";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

import AddDoctor from "./pages/AddDoctor";
import AddLawyer from "./pages/AddLawyer";
import ManageDoctors from "./pages/ManageDoctors";
import ManageLawyers from "./pages/ManageLawyers";
import AdminAppointments from "./pages/AdminAppointments";

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/doctors" element={<DoctorList/>}/>
<Route path="/lawyers" element={<LawyerList/>}/>

<Route path="/doctor/:name" element={<DoctorAppointment/>}/>
<Route path="/lawyer/:name" element={<LawyerAppointment/>}/>

<Route path="/appointments" element={<Appointments/>}/>

<Route path="/login" element={<Login/>}/>
<Route path="/admin" element={<AdminDashboard/>}/>

<Route path="/add-doctor" element={<AddDoctor/>}/>
<Route path="/add-lawyer" element={<AddLawyer/>}/>

<Route path="/manage-doctors" element={<ManageDoctors/>}/>
<Route path="/manage-lawyers" element={<ManageLawyers/>}/>

<Route path="/admin-appointments" element={<AdminAppointments/>}/>

</Routes>

</BrowserRouter>

)

}

export default App;