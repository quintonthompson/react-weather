import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
    setLoading(true);
    console.log("calling api");
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=imperial&appid=da9547267bfdaf227dd8d020f0cae363`
      );

      const resJSON = await apiRes.json();
      console.log(resJSON);
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.country,
      });
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
      <div style={{ color: "black" }}>
        There has been and error <br />
        <button onClick={() => setError(false)}>Reset</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "200px",
          height: "240px",
          justifyContent: "center",
        }}
      >
        <PuffLoader />
      </div>
    );
  }

  return (
    <WeatherCard
      getWeather={getWeather}
      temp={weather.temp}
      condition={weather.condition}
      city={weather.city}
      country={weather.country}
    />
  );
};

export default WeatherEngine;
