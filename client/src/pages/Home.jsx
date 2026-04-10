import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();

  const [aiOpen, setAiOpen] = useState(false);
  const [aiText, setAiText] = useState("Hello! I am your AI Assistant 🤖");

  const tips = [
    "🩺 For Doctor appointments, select correct specialization.",
    "⚖️ For Lawyer appointments, check field expertise.",
    "📅 Book early to avoid delays.",
    "💡 Keep your documents ready for consultation."
  ];

  const randomTip = () => {
    const t = tips[Math.floor(Math.random() * tips.length)];
    setAiText(t);
  };

  // Robot click toggle
  const handleRobotClick = () => {
    setAiOpen(prev => !prev);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
      color: "white",
      fontFamily: "Arial",
      textAlign: "center",
      position: "relative"
    }}>

      <style>{`
        @keyframes float{
          0%{transform:translateY(0)}
          50%{transform:translateY(-10px)}
          100%{transform:translateY(0)}
        }

        @keyframes blink{
          0%, 90%, 100% {height:8px;}
          95% {height:2px;}
        }

        @keyframes blinkDots{
          0%, 20%, 100%{opacity:0.2;}
          50%{opacity:1;}
        }

        /* Buttons horizontal */
        .buttonContainer {
          display: flex;
          flex-direction: row;  /* horizontal */
          justify-content: space-around;
          flex-wrap: wrap;
          background: rgba(255,255,255,0.1);
          padding: 40px;
          border-radius: 15px;
          width: 90%;
          max-width: 600px;
          backdrop-filter: blur(10px);
          margin-bottom: 20px;
        }

        button:hover{
          transform: scale(1.05);
        }

        /* Stickers horizontal */
        .stickers {
          display: flex;
          flex-direction: row; /* horizontal */
          align-items: center;
          justify-content: center;
          margin-top: 20px;
        }

        .stickers img{
          width:70px;
          margin: 0 15px; /* horizontal spacing */
          animation: float 4s ease-in-out infinite;
        }

        /* Robot container */
        .robotContainer{
          position: fixed;
          bottom: 25px;
          right: 25px;
          display: flex;
          flex-direction: column; /* bubble above robot */
          align-items: center;
          cursor: pointer;
          z-index: 10;
        }

        .robotBubble{
          background: #00ffff;
          color: #000;
          padding: 5px 12px;
          border-radius: 20px;
          margin-bottom: 8px;
          font-weight: bold;
          animation: float 2s ease-in-out infinite;
          box-shadow: 0 3px 10px rgba(0,0,0,0.3);
        }

        .robotCore{
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg,#00ffff,#00ced1);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px #00ffff;
          position: relative;
        }

        .robotEyes{
          position: absolute;
          top: 18px;
          width: 24px;
          display: flex;
          justify-content: space-between;
        }

        .eye{
          width: 8px;
          height: 8px;
          background: black;
          border-radius: 50%;
          animation: blink 2s infinite;
        }

        .eye:nth-child(2){
          animation-delay: 1s;
        }

        .dots{
          position: absolute;
          bottom: -12px;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .dots span{
          display: inline-block;
          width: 6px;
          height: 6px;
          margin: 0 2px;
          background: white;
          border-radius: 50%;
          animation: blinkDots 1.5s infinite;
        }
        .dots span:nth-child(2){animation-delay: 0.2s;}
        .dots span:nth-child(3){animation-delay: 0.4s;}

        /* AI Popup Box */
        .aiBox{
          position: fixed;
          bottom: 100px;
          right: 100px;
          width: 280px;
          background: linear-gradient(135deg,#4b6cb7,#182848);
          color: white;
          padding: 15px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.4);
          z-index:9;
          display: flex;
          flex-direction: column;
        }

        .aiBox button{
          margin-top:8px;
          width:100%;
          padding:8px;
          border:none;
          border-radius:10px;
          cursor:pointer;
          background:#00ffff;
          color:#000;
          font-weight:bold;
        }

        .aiBox button:hover{
          background:#00ced1;
        }
      `}</style>

      <h1>🏥 Appointment Booking System</h1>

      <div className="buttonContainer">
        <button style={btn} onClick={()=>navigate("/doctors")}>
          🩺 Doctor Appointment
        </button>
        <button style={btn} onClick={()=>navigate("/lawyers")}>
          ⚖️ Lawyer Appointment
        </button>
        <button style={btn} onClick={()=>navigate("/appointments")}>
          📅 View Appointments
        </button>
        <button style={btn} onClick={()=>navigate("/login")}>
          🔐 Admin Login
        </button>
      </div>

      {/* Stickers */}
      <div className="stickers">
        <img src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"/>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"/>
        <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"/>
      </div>

      {/* Robot with Bubble */}
      <div className="robotContainer" onClick={handleRobotClick}>
        {!aiOpen && <div className="robotBubble">Need Help?</div>}
        <div className="robotCore">
          <div className="robotEyes">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
          <div className="dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>

      {/* AI Assistant Box */}
      {aiOpen &&
        <div className="aiBox">
          <h4>AI Assistant</h4>
          <p>{aiText}</p>

          <button onClick={()=>setAiText("🩺 Click Doctor Appointment to book a doctor.")}>
            Doctor Help
          </button>
          <button onClick={()=>setAiText("⚖️ Click Lawyer Appointment for legal help.")}>
            Lawyer Help
          </button>
          <button onClick={()=>setAiText("📅 View your bookings in View Appointments.")}>
            Appointment Help
          </button>
          <button onClick={()=>setAiText("🔐 Admin can manage system from Admin Login.")}>
            Admin Help
          </button>
          <button onClick={randomTip}>
            🎲 Random AI Tip
          </button>
          <button onClick={()=>navigate("/doctors")}>
            ⚡ Go Doctor Page
          </button>
          <button onClick={()=>navigate("/lawyers")}>
            ⚡ Go Lawyer Page
          </button>
          <button onClick={()=>navigate("/appointments")}>
            ⚡ Open Appointments
          </button>
          <button onClick={()=>setAiOpen(false)}>
            Close
          </button>
        </div>
      }
    </div>
  )
}

const btn={
  padding:"12px 20px",
  border:"none",
  borderRadius:"20px",
  cursor:"pointer",
  margin: "5px"
};

export default Home;