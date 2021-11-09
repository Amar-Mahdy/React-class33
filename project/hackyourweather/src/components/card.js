import React from "react";
import CityInfo from "./cityInfo.js";
import Forecast from "./forecast";
import MainInfo from "./mainInfo.js";

const card = ({ city, data }) => {
  return (
    <>
      <div>
        <CityInfo city={city} />
        <MainInfo city={city.weather[0]} />
        <Forecast city={city} />
      </div>
    </>
  );
};

export default card;
