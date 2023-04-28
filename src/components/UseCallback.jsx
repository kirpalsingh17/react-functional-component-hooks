import { useCallback, useState } from "react";
import UseCallbackInner from "./UseCallbackInner";
function UseCallback() {
  const [count, setCount] = useState(0);
  const [newValue, setNewValue] = useState(100);

  const setNew = useCallback(() => {
    setNewValue(newValue + 1);
  }, [newValue]);

  return (
    <div>
      UseCallback
      <UseCallbackInner newValue={newValue} setNew={setNew} />
      {count}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default UseCallback;
