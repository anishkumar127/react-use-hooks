import React from "react";
import { useToggle } from "react-use";
const OtherHooks = () => {
  const [on, toggle] = useToggle(false);
  return (
    <div>
      <h1>
        Toggle : <span> {on ? "ON" : "OFF"}</span>
      </h1>
      <button onClick={() => toggle(true)}>Toggle ON</button>
      <button onClick={() => toggle(false)}>Toggle OFF</button>
    </div>
  );
};

export default OtherHooks;
