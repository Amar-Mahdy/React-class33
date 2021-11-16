import React from "react";

const forecast = ({ city }) => {
  const {  main, coord } = city;
  const cityLocation = `${coord.lat},${coord.lon}`;
  return (
    <>
      <span>
        <strong>min temp: </strong> {main.temp_min}
      </span> <br />
      <span>
        <strong>max temp: </strong>
        {main.temp_max}
      </span> <br />
      <span>
        <strong>location: </strong>
        {cityLocation}
      </span>
    </>
  );
};

export default forecast;
