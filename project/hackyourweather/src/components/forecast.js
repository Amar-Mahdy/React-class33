import React from "react";

const forecast = ({ city }) => {
  const { main, coord } = city;
  const cityLocation = `${coord.lat},${coord.lon}`;
  return (
    <>
      <div>
        <strong>min temp: </strong> {main.temp_min}
      </div>
      <div>
        <strong>max temp: </strong>
        {main.temp_max}
      </div>
      <div>
        <strong>location: </strong>
        {cityLocation}
      </div>
    </>
  );
};

export default forecast;
