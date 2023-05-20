import React from "react";
import "./CurrentWeather.css";

function CurrentWeather({ data }) {
  const [city, country] = data.city.split(",");

  return (
    <div className="current-weather-container">
      <div className="top">
        <div>
          <h1>{city} ,</h1>
          <h3> {country}</h3>
          <p>{data.weather[0].description} (Today)</p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt="weather" />
      </div>
      <div className="bottom">
        <div className="details-main-container">
          <div className="details-container sideBorder">
            <p>Temperature</p>
            <h1>{data.main.temp}°C</h1>
          </div>
          <div className="details-container sideBorder">
            <p>Wind</p>
            <h1>{data.wind.speed} m/s</h1>
          </div>
          <div className="details-container sideBorder">
            <p>Humidity</p>
            <h1>{data.main.humidity}%</h1>
          </div>
          <div className="details-container">
            <p>Pressure</p>
            <h1>{data.main.pressure} hPa</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
