import React, { memo, useContext } from "react";
import "../styles/Weather.css";
import { WeatherContext } from "../App";

const Weather = ({ icon }) => {
  const cityProps = useContext(WeatherContext);

  const { data } = cityProps;

  const temperature = Math.round(data.main.temp - 273.15).toFixed(2);
  const temperature_min = Math.round(data.main.temp_min - 273.15).toFixed(2);
  const temperature_max = Math.round(data.main.temp_max - 273.15).toFixed(2);
  const sunRise = new Date(data.sys.sunrise * 1000).toLocaleString();
  const sunSet = new Date(data.sys.sunset * 1000).toLocaleString();

  return (
    <div className="wrapper">
      <div className="img">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
      </div>
      <h1 className="name">{data.name}</h1>
      <div className="text">
        <h2 className="temperature">
          Temperature:{" "}
          <span className="temperature-number">{temperature}℃</span>
        </h2>
      </div>
      <div className="list">
        <ul className="list-item">
          <li>
            <a href="http:\\">Lowest temperature : {temperature_min}℃</a>
          </li>
          <li>
            <a href="http:\">Highest temperature : {temperature_max}℃</a>
          </li>
          <li>
            <a href="http:\\">Longitude: {data.coord.lon}</a>
          </li>
          <li>
            <a href="http:\\">Latitude: {data.coord.lat}</a>
          </li>
        </ul>
        <ul className="list-item">
          <li>
            <a href="http:\\">Sunrise: {sunRise}</a>
          </li>
          <li>
            <a href="http:\\">Sunset: {sunSet}</a>
          </li>
          <li>
            <a href="http:\\">Wind speed: {data.wind.speed}</a>
          </li>
          <li>
            <a href="http:\\">Wind degree: {data.wind.deg}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(Weather);
