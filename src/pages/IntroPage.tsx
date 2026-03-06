import { useNavigate } from "react-router-dom";

const IntroPage = () => {

  const navigate = useNavigate();

  return (
    <div  style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 className="love-title">Hi Asmita ❤️</h1>

      <p className="love-text">I made something special for you...</p>

      <button className="love-btn love-btn-primary" onClick={() => navigate("/puzzle")}>
        Solve a small puzzle 🧩
      </button>
    </div>
  );
};

export default IntroPage;