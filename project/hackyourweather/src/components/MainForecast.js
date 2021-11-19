import React from "react";

const MainForecast = ({ city }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <h2>{city.main} </h2>

      <h4>{capitalizeFirstLetter(city.description)}</h4>
    </>
  );
};

export default MainForecast;
