import "./App.css";
import Card from "./components/Card.js";
import Form from "./components/Form";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function App() {
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [id, setId] = useState(0);

  const URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

  const getWeather = async () => {
    try {
      const response = await fetch(URL);
      const weather = await response.json();
      if (response.status !== 200 || !response.ok) {
        setErrMsg(weather.message);
        throw new Error(weather.message);
      } else {
        
        setData([...data,weather]);
        setErrMsg(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setCityName("")
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
          {data &&
            data.map((city, index) => {
                
              return (
              <Card 
              key={index} 
              id={index} 
              city={city} 
              handleDelete={handleDelete}/>
              )
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

export default App;
