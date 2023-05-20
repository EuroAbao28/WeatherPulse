import { useEffect, useState } from "react";
import "./App.css";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Search from "./components/search/search";
import Forecast from "./components/forecast/Forecast";

function App() {
  useEffect(() => {
    document.title = "WeatherPulse"; // Set the new title here
  }, []);

  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForeCast] = useState();

  const handleOnSearchChange = (searchData) => {
    console.log("FROM APP", searchData);

    // desctructure the data and split
    const [lat, long] = searchData.value.split(" ");
    const fetchCurrentWeather = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const fetchForeCast = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([fetchCurrentWeather, fetchForeCast])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForeCast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.error(err));
  };

  console.log("CURRENT WEATHER", currentWeather);
  console.log("FORECAST", forecast);

  return (
    <div
      className={currentWeather && forecast ? "container" : "container empty"}>
      <Search onSearchChange={handleOnSearchChange} />
      {!currentWeather && !forecast && (
        // <img className="searchBG" src="search_bg.jpg" alt="search" />
        <div className="title-container">
          <p className="title">WeatherPulse</p>
          <p className="tagline">
            "Stay ahead of changing weather conditions <br /> and make the most
            of every moment."
          </p>
        </div>
      )}
      {currentWeather && forecast && <CurrentWeather data={currentWeather} />}
      {currentWeather && forecast && <Forecast data={forecast} />}
      <div
        className={currentWeather && forecast ? "creator" : "creator absolute"}>
        <p className="head">Developed by</p>
        <p className="name">Euro Abao</p>
      </div>
    </div>
  );
}

export default App;
