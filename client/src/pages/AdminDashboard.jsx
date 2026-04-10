import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AdminDashboard() {

  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (!admin) {
      navigate("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  }

  const btnStyle = {
    width: "250px",
    padding: "12px",
    margin: "10px 0",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "0.3s",
    color: "#fff",
    background: "linear-gradient(135deg, #4b6cb7, #182848)"
  };

  const btnHoverStyle = {
    filter: "brightness(1.2)"
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "50px",
      fontFamily: "Arial, sans-serif",
      color: "#fff"
    }}>
      <h1 style={{ marginBottom: "40px", fontSize: "36px", color: "#00ffff" }}>Admin Panel</h1>

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <button
          style={btnStyle}
          onMouseOver={e => e.currentTarget.style.filter = "brightness(1.2)"}
          onMouseOut={e => e.currentTarget.style.filter = "none"}
          onClick={() => navigate("/add-doctor")}
        >
          Add Doctor
        </button>

        <button
          style={btnStyle}
          onMouseOver={e => e.currentTarget.style.filter = "brightness(1.2)"}
          onMouseOut={e => e.currentTarget.style.filter = "none"}
          onClick={() => navigate("/add-lawyer")}
        >
          Add Lawyer
        </button>

        <button
          style={btnStyle}
          onMouseOver={e => e.currentTarget.style.filter = "brightness(1.2)"}
          onMouseOut={e => e.currentTarget.style.filter = "none"}
          onClick={() => navigate("/manage-doctors")}
        >
          Manage Doctors
        </button>

        <button
          style={btnStyle}
          onMouseOver={e => e.currentTarget.style.filter = "brightness(1.2)"}
          onMouseOut={e => e.currentTarget.style.filter = "none"}
          onClick={() => navigate("/manage-lawyers")}
        >
          Manage Lawyers
        </button>

        <button
          style={btnStyle}
          onMouseOver={e => e.currentTarget.style.filter = "brightness(1.2)"}
          onMouseOut={e => e.currentTarget.style.filter = "none"}
          onClick={() => navigate("/admin-appointments")}
        >
          Manage Appointments
        </button>

        <button
          style={{ ...btnStyle, background: "linear-gradient(135deg,#ff4d4d,#800000)" }}
          onMouseOver={e => e.currentTarget.style.filter = "brightness(1.2)"}
          onMouseOut={e => e.currentTarget.style.filter = "none"}
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;