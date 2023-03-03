import React from "react";
import { useSessionStorage } from "react-use";

const SessionStorage = () => {
  const [value, setValue] = useSessionStorage("username", "anish@127");

  return (
    <div>
      <h1>Session Storage</h1>
      <button onClick={() => setValue("anishbishnoi127@gmail.com")}>
        Update Value Into Local Storage
      </button>
      <h3> display Session Storage value : {value} </h3>
    </div>
  );
};

export default SessionStorage;
