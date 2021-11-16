import React from "react";

const MainForecast = ({ city }) => {
  return (
    <>
      <h4>
        {city.main}
        <br />
        <strong>{city.description}</strong>
      </h4>
    </>
  );
};

export default MainForecast;
