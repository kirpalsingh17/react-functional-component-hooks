import { useState, useRef, useEffect } from "react";

function UseRef() {
  const [count, setCount] = useState("");

  const countPlus = useRef(0);
  const inputE = useRef();
    /*
    Usage of useRef with two ways
    1. Without rendering dom with state
    2. handling Dom with useref
    */
  useEffect(() => {
    countPlus.current = countPlus.current + 1;
  });

  const checkRef = () => {
    console.log(inputE.current.value);
  };

  return (
    <div>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      {countPlus.current}
      <br />
      <input type="text" ref={inputE} />
      <button onClick={checkRef}>Check DOM Ref</button>
    </div>
  );
}

export default UseRef;
