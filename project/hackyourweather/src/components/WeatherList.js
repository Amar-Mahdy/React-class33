import React, { useContext } from "react";
import "../App.css";
import Card from "./Card.js";
import Form from "./Form";
import { WeatherContext } from "./WeatherContext";

function WeatherList() {
  const [
    data,
    setData,
    cityName,
    setCityName,
    getWeather,
    isLoading,
    errMsg,
    setErrMsg,
  ] = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName !== "") {
      getWeather();
    }
  };
  const handleCity = (e) => {
    setCityName(e.target.value);
  };
  const handleDelete = (id) => {
    const restIndex = data.filter((item) => item.id !== id);
    setData(restIndex);
  };

  return (
    <>
      <div className="container">
        <h1>Weather</h1>
        <Form
          handleCity={handleCity}
          handleSubmit={handleSubmit}
          cityName={cityName}
          setErrMsg={setErrMsg}
        />
      </div>
      {errMsg && <h3 className="errorMessage">{errMsg}</h3>}
      {isLoading && <h3 className="errorMessage">Loading...</h3>}

      {data.length > 0 ? (
        <div className="container">
          <h4 className="click">Click on the city to see the charts</h4>
          {data &&
            data.map((city, index) => {
              return (
                <Card key={index} city={city} handleDelete={handleDelete} />
              );
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
