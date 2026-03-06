import { useNavigate } from "react-router-dom";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import uspic from "../resources/us.jpg";

const PuzzlePage = () => {

  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "200px",
        boxSizing: "border-box",
      }}
    >

      <div style={{ textAlign: "center" }}>
        <h2 className="love-title">
          Arrange our memories ❤️
        </h2>

        <div
          style={{
            width: "600px",
            margin: "auto"
          }}
        >
          <JigsawPuzzle
            imageSrc={uspic}
            rows={4}
            columns={5}
            onSolved={() => {
              alert("You solved our memories ❤️");
              navigate("/message");
            }}
          />
        </div>

      </div>

    </div>
  );
};

export default PuzzlePage;