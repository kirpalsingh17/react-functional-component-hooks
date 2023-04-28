import { useContext } from "react";
import UserContext from "../UserContext";

function Fourth() {
   const count = useContext(UserContext);

  return (
    <div>
        <h4>Fourth </h4>
        <b>{count}</b>
    </div>
  )
}

export default Fourth