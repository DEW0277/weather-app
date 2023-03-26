import React, { useState } from "react";
import { FetchingWeather } from "./api/fetch-weather";

const Aplication = () => {
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await FetchingWeather(query);
      setWeather(data);
      setQuery();
      console.log(data);
    }
  };

  return (
    <div className="main-container">
      <div className="search-box">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
      {weather.main && (
        <div className="city">
          <div className="info">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </div>
          <div className="details">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aplication;
