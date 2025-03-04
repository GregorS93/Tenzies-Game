import { useState, useRef, useEffect } from "react";
import Die from "../components/Die-Component";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const [seconds, setSeconds] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval;
    if (startTimer) {
      interval = setInterval(() => {
        setSeconds((prevSec) => prevSec + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTimer]);

  const buttonRef = useRef(null);

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
      handleStopTimer();
      setCounter((prevCount) => prevCount);
    }
  }, [gameWon]);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      // value: Math.ceil(Math.random() * 6),
      value: 5,
      isHeld: false,
      id: nanoid(),
    }));
  }

  function handleStartTimer() {
    setStartTimer(true);
  }

  function handleStopTimer() {
    setStartTimer(false);
  }

  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setDice(generateAllNewDice());
      setSeconds(0);
    }
  }

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  function rollCounter() {
    if (!gameWon) {
      setCounter((prevCount) => prevCount + 1);
    } else {
      setCounter(0);
    }
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <div className="rollbtn-sec">
        <p className="timer">Play time: {seconds}s</p>
        <button
          ref={buttonRef}
          className="roll-dice"
          onClick={() => {
            handleStartTimer(), rollDice(), rollCounter();
          }}
        >
          {gameWon ? "New Game" : "Roll"}
        </button>
        <div className="counter">Roll counter: {counter}</div>
      </div>
    </main>
  );
}
