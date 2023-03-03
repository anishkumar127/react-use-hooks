import React from "react";
import { useGeolocation } from "react-use";
const GeoLocation = () => {
  const state = useGeolocation();
  console.log(state);
  return (
    <div>
      Geo Location
      <h3>{JSON.stringify(state)}</h3>
    </div>
  );
};

export default GeoLocation;
