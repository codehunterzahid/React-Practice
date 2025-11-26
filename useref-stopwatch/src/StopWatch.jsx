import React, { useRef, useState } from "react";
import './StopWatch.css'

function StopWatch() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startCount = () => {
    timerRef.current = setInterval(() => {
      setTime((count) => count + 1);
    }, 1000);
  };

  const stopCount = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetCount = () => {
    stopCount();
    setTime(0);
  };

  return (
    <div className="container">
      <h2 className="timer">StopWatch: {time} Seconds</h2>
      <button onClick={startCount}>Start</button>
      <button onClick={stopCount}>Stop</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default StopWatch;
