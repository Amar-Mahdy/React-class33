import React, { useContext } from "react";
import "../App.css";
import Card from "./Card.js";
import Form from "./Form";
import { WeatherContext } from "./WeatherContext";

function WeatherList() {
  const { data, cityName, isLoading, errMsg, setErrMsg } =
    useContext(WeatherContext);

  return (
    <>
      <div className="container">
        <h1>Weather</h1>
        <Form cityName={cityName} setErrMsg={setErrMsg} />
      </div>
      {errMsg && <h3 className="errorMessage">{errMsg}</h3>}
      {isLoading && <h3 className="errorMessage">Loading...</h3>}

      {data.length > 0 ? (
        <div className="container">
          <h4 className="click">Click on the city to see the charts</h4>
          {data &&
            data.map((city, index) => {
              return <Card key={index} city={city} />;
            })}
        </div>
      ) : (
        <h2 className="container">
          Welcome to the city weather app <br />
          write the name of your favorite city and forecast it's weather
        </h2>
      )}
    </>
  );
}

export default WeatherList;
