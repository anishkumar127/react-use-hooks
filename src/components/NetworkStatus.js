import React from "react";
import { useNetworkState } from "react-use";
const NetworkStatus = () => {
  const state = useNetworkState();
  return (
    <div>
      Network Status
      <h4> {state && state.online ? "online" : "offline"}</h4>
    </div>
  );
};

export default NetworkStatus;
