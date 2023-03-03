import React from "react";
import { createBreakpoint } from "react-use";
const useBreakPoint = createBreakpoint({
  XL: 1280,
  L: 768,
  S: 350,
});
const BreakPoints = () => {
  const breakPoint = useBreakPoint();
  return (
    <div>
      <h1>BreakPoint</h1>

      {breakPoint === "XL" && (
        <div>
          <h1 style={{ color: "red" }}>XL</h1>
        </div>
      )}
      {breakPoint === "L" && (
        <div>
          <h1>L</h1>
        </div>
      )}
      {breakPoint === "S" && (
        <div>
          <h1>S</h1>
        </div>
      )}
    </div>
  );
};

export default BreakPoints;
