import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLawyers } from "../services/api";

function LawyerList() {
  const [lawyers, setLawyers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLawyers();
  }, []);

  const fetchLawyers = async () => {
    try {
      const res = await getLawyers();
      setLawyers(res.data);
    } catch (error) {
      console.log("Error fetching lawyers:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Select Lawyer</h1>

      {lawyers.length === 0 && <p>No Lawyers Available</p>}

      {lawyers.map((law) => (
        <div
          key={law._id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px"
          }}
        >
          <h3>{law.name}</h3>
          <p>Field: {law.specialization}</p>
          <p>Experience: {law.experience} years</p>

          <button onClick={() => navigate(`/lawyer/${law._id}`)}>
            Book Appointment
          </button>
        </div>
      ))}
    </div>
  );
}

export default LawyerList;