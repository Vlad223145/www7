import { useNavigate } from "react-router-dom";

export default function Shop() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      backgroundColor: "rgb(255, 255, 255)", 
      minHeight: "100vh", 
      padding: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <button 
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "30px",
          left: "30px",
          backgroundColor: "rgb(0, 0, 0)",
          color: "rgb(255, 255, 255)",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          transitionDuration: "0.3s"
        }}
        onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
        onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
      >
        ←
      </button>
      
      <h1 style={{
        fontSize: "48px",
        color: "rgb(0, 0, 0)",
        marginBottom: "20px",
        textAlign: "center"
      }}>
        Shop Page
      </h1>
      
      <p style={{
        fontSize: "18px",
        color: "rgb(102, 102, 102)",
        textAlign: "center",
        maxWidth: "600px"
      }}>
        This is a placeholder page. Content will be added later.
      </p>
    </div>
  );
}
