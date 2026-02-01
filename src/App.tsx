import { useState, useEffect } from "react";

function App() {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0 && isRunning) {
      alert("Time's up!");
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (timeLeft === 0) {
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      if (totalSeconds > 0) setTimeLeft(totalSeconds);
      else return;
    }
    setPaused(false);
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setPaused(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const displayTime = (): string => {
    const h = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
    const m = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
    const s = String(timeLeft % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <>
      <div
        style={{ backgroundColor: "#36454F", height: "100vh", color: "white" }}
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/05dfd329a2.js"
          crossOrigin="anonymous"
        />
        <div
          style={{
            fontFamily: "IBM Plex Mono",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h1 className="relative text-5xl font-semibold mb-9 inline-block group">
            Countdown Timer
            <span className="absolute left-0 -bottom-2 w-0 h-[3px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </h1>
          {!isRunning && timeLeft === 0 && (
            <div className="mb-1">
              <form action="#">
                <fieldset>
                  <legend>Input time:</legend>
                  <input
                    type="number"
                    min={0}
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    placeholder="Hours"
                    style={{ width: "60px", marginRight: "5px" }}
                    className="text-center border border-white rounded"
                  />
                  <input
                    type="number"
                    min={0}
                    value={minutes}
                    onChange={(e) => setMinutes(Number(e.target.value))}
                    placeholder="Minutes"
                    style={{ width: "60px", marginRight: "5px" }}
                    className="text-center border border-white rounded"
                  />
                  <input
                    type="number"
                    min={0}
                    value={seconds}
                    onChange={(e) => setSeconds(Number(e.target.value))}
                    placeholder="Seconds"
                    style={{ width: "60px" }}
                    className="text-center border border-white rounded"
                  />
                </fieldset>
              </form>
            </div>
          )}
          <div style={{ marginTop: "1rem" }}>
            {!isRunning && !paused && (
              <button
                onClick={startTimer}
                style={{ marginRight: "5px" }}
                className="border border-white bg-white text-black rounded-lg px-1 transition-all duration-300 ease-in-out hover:text-white hover:bg-black hover:border-black"
              >
                Start
              </button>
            )}

            {isRunning && !paused && (
              <button
                onClick={pauseTimer}
                style={{ marginRight: "5px" }}
                className="border border-white text-black bg-white rounded-lg px-1 transition-all duration-200 ease-in-out hover:text-white hover:bg-black hover:border-black"
              >
                Pause
              </button>
            )}
            {paused && (
              <button
                onClick={startTimer}
                style={{ marginRight: "5px" }}
                className="border border-white text-black bg-white rounded-lg px-1 transition-all duration-200 ease-in-out hover:text-white hover:bg-black hover:border-black"
              >
                Resume
              </button>
            )}
            <button
              onClick={resetTimer}
              className="border border-white bg-white text-black rounded-lg px-1 transition-all duration-200 ease-in-out hover:text-white hover:bg-black hover:border-black"
            >
              Reset
            </button>
          </div>
          <h2 style={{ marginTop: "2rem", fontSize: "2rem" }}>
            <img src="/vite.svg" alt="Clock" className="inline w-10 h-10 mr-2" />:{" "}
            {timeLeft > 0 ? displayTime() : "00:00:00"}
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
