import React from "react";
import { getCelcius } from "../utils/utils";

const forecast = ({ city }) => {
  const { coord } = city;
  const cityLocation = `${coord.lat},${coord.lon}`;
  return (
    <>
      <span>
        <strong>min temp: </strong> {getCelcius(city.main.temp_min)}
      </span>{" "}
      <br />
      <span>
        <strong>max temp: </strong>
        {getCelcius(city.main.temp_max)}
      </span>{" "}
      <br />
      <span>
        <strong>location: </strong>
        {cityLocation}
      </span>
    </>
  );
};

export default forecast;
