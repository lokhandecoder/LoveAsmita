import { useNavigate } from "react-router-dom";

const MessagePage = () => {

  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>

      <h2 className="love-title">Something I want to tell you ❤️</h2>

      <p className="love-text" style={{ maxWidth: "500px", margin: "auto" }}>
        From the day you came into my life, everything feels brighter.
        Your smile makes every moment special.
        I feel lucky to have you and I want you in my life forever.
      </p>

      <br />

      <button className="love-btn love-btn-primary" onClick={() => navigate("/proposal")}>
        One last question ❤️
      </button>

    </div>
  );
};

export default MessagePage;