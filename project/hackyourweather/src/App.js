import "./App.css";
import Card from "./components/card.js";
import source from "./city-weather.json";

function App() {
  return (
    <div>
      <div className="App">
        <h1>Weather</h1>
      </div>

      {source.map((data, index) => {
        return (
          <div className="card">
            <Card data={data} key={index} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
