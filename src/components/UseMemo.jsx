import { useState, useMemo } from "react";

const manuplution = (count) => {
     console.log("Calculating...");
  return count * 2;
};

function UseMemo() {
  const [count, setCount] = useState(100);
  const calculation = useMemo(() => manuplution(count), [count]);

  return (
    <div>
      UseMemo
      {count}/{calculation}
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default UseMemo;
