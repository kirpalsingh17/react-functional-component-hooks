import { memo } from "react";

function UseCallbackInner({newValue, setNew}) {
  console.log("Inner Callback");

  return (
    <div>
      UseCallbackInner
      {newValue}
      <button onClick={setNew}>New </button>
    </div>
  );
}

export default memo(UseCallbackInner);

