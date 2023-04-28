import { useReducer } from "react";

const defaultValue = 0;

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INC":
      return ++state;

    case "DEC":
      return --state;

    default:
      return state;
  }
};
function UseReducer() {
  const [defaultValues, dispatch] = useReducer(reducer, defaultValue);

  return (
    <div>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
      {defaultValues}
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
    </div>
  );
}

export default UseReducer;
