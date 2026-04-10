import { useState } from "react";

function DoctorAppointment() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");

  // Today date in YYYY-MM-DD format for min attribute
  const todayStr = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !mobile.trim() || !date || !time || !address.trim()) {
      alert("Please fill all fields");
      return;
    }

    if (mobile.length !== 10) {
      alert("Mobile number must be exactly 10 digits");
      return;
    }

    // Date already restricted by min, extra safety check
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0,0,0,0);
    if (selectedDate < today) {
      alert("Please select today or a future date");
      return;
    }

    const appointment = { name, mobile, date, time, address, type: "doctor" };
    const old = JSON.parse(localStorage.getItem("appointments")) || [];
    localStorage.setItem("appointments", JSON.stringify([...old, appointment]));

    alert("Doctor Appointment Booked Successfully");
    setName(""); setMobile(""); setDate(""); setTime(""); setAddress("");
  };

  return (
    <div style={{ textAlign:"center", marginTop:"50px" }}>
      <h1>Book Doctor Appointment</h1>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Full Name" 
          value={name} 
          onChange={e => setName(e.target.value)} 
        /><br/><br/>

        <input 
          placeholder="Mobile Number" 
          value={mobile} 
          onChange={e => {
            const val = e.target.value.replace(/\D/g,''); // only digits
            if(val.length <= 10) setMobile(val);
          }}
        /><br/><br/>

        <input 
          type="date" 
          value={date} 
          min={todayStr}   // Past date blocked
          onChange={e => setDate(e.target.value)} 
        /><br/><br/>

        <input 
          type="time" 
          value={time} 
          onChange={e => setTime(e.target.value)} 
        /><br/><br/>

        <input 
          placeholder="Address" 
          value={address} 
          onChange={e => setAddress(e.target.value)} 
        /><br/><br/>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default DoctorAppointment;