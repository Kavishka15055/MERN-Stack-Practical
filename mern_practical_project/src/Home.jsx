import { useNavigate } from 'react-router-dom'
import './App.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div
  style={{
    width: "300%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(120deg, #00c6ff, #0072ff)",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    overflow: "hidden",
    marginLeft: "-100%",
  }}
>
  <h1
    style={{
      fontSize: "3.5rem",
      marginBottom: "15px",
      letterSpacing: "1px",
      fontWeight: "700",
    }}
  >
    Welcome to <span style={{ color: "#FFD700" }}>Website</span>
  </h1>

  <p
    style={{
      fontSize: "1.3rem",
      marginBottom: "50px",
      maxWidth: "600px",
      lineHeight: "1.6",
    }}
  >
    Manage your users efficiently with our modern CRUD system built using MERN.
  </p>

  <button
    onClick={() => navigate("/users")}
    style={{
      background: "linear-gradient(90deg, #ff9966, #ff5e62)",
      border: "none",
      color: "#fff",
      padding: "15px 50px",
      fontSize: "1.2rem",
      borderRadius: "35px",
      cursor: "pointer",
      fontWeight: "600",
      letterSpacing: "0.5px",
      boxShadow: "0px 6px 20px rgba(0,0,0,0.3)",
      transition: "all 0.3s ease-in-out",
    }}
    onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
  >
    Go to Users
  </button>
</div>

  )
}

export default Home

//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
