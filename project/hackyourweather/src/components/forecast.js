import React from "react";

const forecast = ({ min, max, location }) => {
  return (
    <div>
      <div>
        <strong>min temp: </strong> {min}
      </div>
      <div>
        <strong>max temp: </strong>
        {max}
      </div>
      <div>
        <strong>location: </strong>
        {location}
      </div>
    </div>
  );
};

export default forecast;
