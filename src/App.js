import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={90} />
      <WeatherCard temp={100} />
      <WeatherCard temp={32} />
    </div>
  );
}

export default App;
