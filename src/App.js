import { render } from "react-dom";
import { useState } from "react";

function DefaultView(props) {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div onClick={() => props.startGame("ONE")}>One Player: coming soon</div>
      <div onClick={() => props.startGame("TWO")}>Two Players</div>
    </>
  );
}

function Game() {
  return <div>Game started</div>;
}

const App = () => {
  const [gameStarted, setGameStarted] = useState(false); // [state, setState]

  const handleGameChoice = (gameMode) => {
    if (gameMode === "ONE") {
      alert("NO NOT YET");
    } else if (gameMode === "TWO") {
      setGameStarted(true);
    }
  };

  return (
    <div className="border-menu">
      {gameStarted ? <Game /> : <DefaultView startGame={handleGameChoice} />}
    </div>
  );
};

render(<App />, document.getElementById("root"));
