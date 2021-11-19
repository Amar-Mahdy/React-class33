import React from "react";
import WeatherList from "./components/WeatherList";
import { CityPage } from "./components/CityPage";
import { WeatherProvider } from "./components/WeatherContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <WeatherProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WeatherList />} />
          <Route path="/:cityId" element={<CityPage />} />
        </Routes>
      </Router>
    </WeatherProvider>
  );
}

export default App;
