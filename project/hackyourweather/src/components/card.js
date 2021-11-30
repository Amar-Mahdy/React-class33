import React, { useContext } from "react";
import { WeatherContext } from "./WeatherContext";
import Header from "./Header.js";
import Forecast from "./Forecast";
import MainForecast from "./MainForecast.js";
import { ImCancelCircle } from "react-icons/im";

const Card = ({ city }) => {
    console.log(city);
  const { setData, data } = useContext(WeatherContext);

  const handleDelete = (id) => {
    const restIndex = data.filter((item) => item.id !== id);
    setData(restIndex);
  };

  return (
    <div className="card">
      <button className="clear-btn" onClick={() => handleDelete(city.id)}>
        <ImCancelCircle />
      </button>
      <Header city={city} />
      <MainForecast city={city.weather[0]} />
      <Forecast city={city} />
    </div>
  );
};

export default Card;
