import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const increamentCount = () => setCount((prevCount) => ++prevCount);

  const decrementCount = () => setCount((prevCount) => --prevCount);

  useEffect(() => {
    console.log("This UseEffect will run each time");
  });

  useEffect(() => {
    console.log("This UseEffect will run only first time");
  }, []);

  useEffect(() => {
    console.log("This UseEffect will run only if count value gets changed");
  }, [count]);

  useEffect(() => {
    const resizeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.removeEventListener("resize", resizeWidth);
    };
  });

  return (
    <>
      <div>
        <h2>{count}</h2>
        <h2>Width: {width}</h2>
      </div>
      <div className="card">
        <button onClick={decrementCount}>Decreament</button>
        <button onClick={increamentCount}>Increament</button>
      </div>
    </>
  );
}

export default App;
