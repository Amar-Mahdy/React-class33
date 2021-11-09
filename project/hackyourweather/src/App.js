import "./App.css";
import Card from "./components/card.js";
import Form from "./components/form";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  const URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

  const getWeather = async () => {
    try {
      const response = await fetch(URL);
      const weather = await response.json();
      if (response.status !== 200 || !response.ok) {
        setErrMsg(response.message);
        throw new Error(response.message);
      } else {
        setData([weather]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName !== "") {
      getWeather();
    }
    setErrMsg(null);
  };
  const handleCity = (e) => {
    setCityName(e.target.value);
  };

  return (
    <>
      <div className="App">
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
        <div className="card">
          {data &&
            data.map((city, index) => {
              return <Card key={index} city={city} data={data} />;
            })}
        </div>
      ) : (
        <h2 className="App">
          Welcome to the city weather app <br />
          write the name of your favorite city and forecast it's weather
        </h2>
      )}
    </>
  );
}

export default App;
