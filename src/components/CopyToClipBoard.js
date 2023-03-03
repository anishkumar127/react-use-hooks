import React from "react";
import { useCopyToClipboard } from "react-use";
const CopyToClipBoard = () => {
  const [state, copyToClipBoard] = useCopyToClipboard();
  const text = "Hey how are you ?";
  return (
    <div>
      <h1>CopyToClipBoard</h1>
      <p>value here which copied : {state?.value}</p>
      <button onClick={() => copyToClipBoard(text)}>
        Press Button For Copy{" "}
      </button>
    </div>
  );
};

export default CopyToClipBoard;
