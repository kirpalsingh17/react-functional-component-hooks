import { useState, useEffect } from "react";
import "./App.css";
import UserContext from "./UserContext";

import First from "./components/First";
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";

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
    <div>
    <UserContext.Provider value={count}>
      <div>
        <h2>{count}</h2>
        <h2>Width: {width}</h2>
      </div>
      <div className="card">
        <button onClick={decrementCount}>Decreament</button>
        <button onClick={increamentCount}>Increament</button>
      </div>
      <First />
    </UserContext.Provider>
    <UseRef />
    <UseReducer />
    <UseCallback />
    <UseMemo />
    </div>
  );
}

export default App;
