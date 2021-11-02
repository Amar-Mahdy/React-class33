import React from "react";
import CityInfo from "./cityInfo.js";
import Forecast from "./forecast";
import MainInfo from "./mainInfo.js";

const card = ({ data }) => {
  const city = data.name;
  const country = data.sys.country;
  const main = data.weather[0].main;
  const description = data.weather[0].description;
  const min = data.main.temp_min;
  const max = data.main.temp_max;
  const location = `${data.coord.lon},${data.coord.lat}`;

  return (
    <div>
      <CityInfo city={city} country={country} />
      <MainInfo main={main} description={description} />
      <Forecast min={min} max={max} location={location} />
    </div>
  );
};

export default card;
