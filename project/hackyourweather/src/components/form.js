import React, { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

function Form() {
  const { cityName, setCityName, getWeather } = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName !== "") {
      getWeather();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">search for city's weather</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g Groningen"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          name="cityName"
        />
        <button className="btn-d " type="submit">
          click to search
        </button>
      </form>
    </>
  );
}

export default Form;
