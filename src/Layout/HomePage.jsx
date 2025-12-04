import { Footer } from "./Footer";
import { useState, useEffect } from "react";
import plusImage from "../images/plus.jpg";
import minusImage from "../images/minus.png";

const HomePage = () => {
  const [counter, setCounter] = useState(0);
  const [gameStatus, setGameStatus] = useState("");

  const isGameOver = gameStatus === "You Won!" || gameStatus === "You Lose!";

  //   useEffect(() => {
  //     console.log("Runs after every render");
  //   });

  //   useEffect(() => {
  //     console.log("Runs once when the Component loads");
  //   }, []);

  //   useEffect(() => {
  //   console.log("changes when component loads and subsequently when counter changes!");
  // }, [counter]);

  useEffect(() => {
    if (counter === 5) {
      setGameStatus("You Won!");
    } else if (counter === -5) {
      setGameStatus("You Lose!");
    } else {
      setGameStatus("");
    }
  }, [counter]);

  const handleIncrement = () => {
    if (isGameOver) return; // do nothing if game is over
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (isGameOver) return; // do nothing if game is over
    setCounter((prev) => prev - 1);
  };

  const handleRandomPlay = () => {
    if (isGameOver) return; // don’t keep playing after win/lose
    const randomValue = Math.round(Math.random());
    randomValue === 0 ? handleIncrement() : handleDecrement();
  };

  const handleReset = () => {
    setCounter(0);
    setGameStatus("");
  };

  const handleLog = () => {
    console.log(counter);
  };

  return (
    <div className="container">
      <div className="row text-black text-center">
        <h1>Game Score: {counter}</h1>
        <p>You win at +5 points and lose at -5 points!</p>
        <h3>Game Status: {gameStatus || "Keep playing..."}</h3>

        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={minusImage}
            alt="Minus"
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            onClick={handleDecrement}
          />
        </div>

        <div className="col-6 col-md-3">
          <img
            src={plusImage}
            alt="Plus"
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            onClick={handleIncrement}
          />
        </div>

        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-success m-2 w-100"
            onClick={handleRandomPlay}
            disabled={isGameOver}
          >
            Random Play
          </button>
          <button className="btn btn-danger m-2 w-100" onClick={handleReset}>
            Reset
          </button>
          <button className="btn btn-warning m-2 w-100" onClick={handleLog}>
            Log
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
