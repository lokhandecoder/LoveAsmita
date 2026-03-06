import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProposalPage = () => {
  const [accepted, setAccepted] = useState<boolean>(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
    const navigate = useNavigate();


  const moveButton = () => {
    setPos({
      x: Math.random() * 300,
      y: Math.random() * 200,
    });
  };

  if (accepted) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1 className="love-title">❤️ Thank you for accepting ❤️</h1>
        <button
          className="love-btn love-btn-primary"
          onClick={() => navigate("/")}
          style={{ marginRight: "20px" }}
        >
          Back to Puzzle
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 className="love-title">Will you be mine forever? ❤️</h1>

      <button
        className="love-btn love-btn-primary"
        onClick={() => setAccepted(true)}
        style={{ marginRight: "20px" }}
      >
        YES ❤️
      </button>

      <button
        className="love-btn love-btn-primary"
        onMouseEnter={moveButton}
        style={{
          position: "relative",
          left: pos.x,
          top: pos.y,
        }}
      >
        NO 😅
      </button>
    </div>
  );
};

export default ProposalPage;
