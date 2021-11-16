import React from "react";
import Header from "./Header.js";
import Forecast from "./Forecast";
import MainForecast from "./MainForecast.js";
import { ImCancelCircle } from "react-icons/im";

const card = ({ city, handleDelete, id }) => {
  return (
    <div className="card">
      <button 
      className="clear-btn"
      onClick={() => handleDelete(id)}
      >
      
        <ImCancelCircle />
      </button>
      <Header city={city} />
      <MainForecast city={city.weather[0]} />
      <Forecast city={city} />
    </div>
  );
};

export default card;
