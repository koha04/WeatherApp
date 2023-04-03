import React, { useContext, useEffect } from "react";
import { WeatherContext } from "../App";

export const Search = () => {
  const cityProps = useContext(WeatherContext);

  const { city, setCity, prevState, setPrevState, setData } = cityProps;

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${prevState}&appid=2144f754a1ee360772dcf21f9d98c0c7
  `)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [prevState]);

  return (
    <div className="search">
      <input
        type="search"
        name="searchCity"
        value={city}
        id=""
        placeholder="Search City..."
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && setPrevState(city)}
      />
    </div>
  );
};
